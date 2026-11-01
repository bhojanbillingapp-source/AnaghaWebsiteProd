import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Upload, File, X } from "lucide-react";
import { z } from "zod";

// Cloudflare Turnstile types
declare global {
  interface Window {
    turnstile: {
      render: (element: HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
        'error-callback'?: () => void;
        'expired-callback'?: () => void;
      }) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

const applicationSchema = z.object({
  fullName: z.string().trim().min(1, { message: "Full name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  phone: z.string().trim().min(1, { message: "Phone number is required" }).max(20),
  location: z.string().trim().min(1, { message: "Location is required" }).max(200),
  currentJobTitle: z.string().trim().min(1, { message: "Current job title is required" }).max(100),
  yearsOfExperience: z.string().trim().min(1, { message: "Years of experience is required" }),
  availabilityDate: z.string().trim().min(1, { message: "Availability/start date is required" }),
  desiredSalaryRange: z.string().trim().optional(),
  willingToRelocate: z.enum(["yes", "no"], {
    required_error: "Please select an option",
  }),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

interface JobApplicationFormProps {
  jobTitle: string;
  jobId: string;
  onClose: () => void;
}

const JobApplicationForm = ({ jobTitle, jobId, onClose }: JobApplicationFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    currentJobTitle: "",
    yearsOfExperience: "",
    availabilityDate: "",
    desiredSalaryRange: "",
    willingToRelocate: "no",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof ApplicationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [turnstileError, setTurnstileError] = useState<string>("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || "";

  // Initialize Turnstile widget
  useEffect(() => {
    const initTurnstile = () => {
      if (!turnstileRef.current || !TURNSTILE_SITE_KEY) {
        return;
      }

      if (window.turnstile) {
        try {
          const widgetId = window.turnstile.render(turnstileRef.current!, {
            sitekey: TURNSTILE_SITE_KEY,
            callback: (token: string) => {
              setTurnstileToken(token);
              setTurnstileError("");
            },
            'error-callback': () => {
              setTurnstileToken("");
              setTurnstileError("CAPTCHA verification failed. Please try again.");
            },
            'expired-callback': () => {
              setTurnstileToken("");
              setTurnstileError("CAPTCHA expired. Please verify again.");
            },
          });
          turnstileWidgetId.current = widgetId;
        } catch (error) {
          console.error('Error initializing Turnstile:', error);
        }
      } else {
        const checkInterval = setInterval(() => {
          if (window.turnstile) {
            clearInterval(checkInterval);
            initTurnstile();
          }
        }, 100);

        setTimeout(() => {
          clearInterval(checkInterval);
        }, 5000);
      }
    };

    if (document.readyState === 'complete') {
      initTurnstile();
    } else {
      window.addEventListener('load', initTurnstile);
    }

    return () => {
      if (turnstileWidgetId.current && window.turnstile) {
        try {
          window.turnstile.remove(turnstileWidgetId.current);
        } catch (error) {
          console.error('Error removing Turnstile widget:', error);
        }
      }
      window.removeEventListener('load', initTurnstile);
    };
  }, [TURNSTILE_SITE_KEY]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ApplicationFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or Word document (.pdf, .doc, .docx)",
          variant: "destructive",
        });
        return;
      }
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      setResumeFile(file);
    }
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setTurnstileError("");
    setIsSubmitting(true);

    try {
      // Validate form data
      applicationSchema.parse(formData);

      // CAPTCHA verification is disabled
      // To enable: set VITE_TURNSTILE_SITE_KEY and uncomment below
      // if (TURNSTILE_SITE_KEY && !turnstileToken) {
      //   setTurnstileError("Please complete the CAPTCHA verification.");
      //   setIsSubmitting(false);
      //   return;
      // }

      // Validate resume file
      if (!resumeFile) {
        toast({
          title: "Resume required",
          description: "Please upload your resume.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Convert resume to base64
      const reader = new FileReader();
      reader.readAsDataURL(resumeFile);
      
      reader.onload = async () => {
        const resumeBase64 = reader.result as string;
        const resumeData = resumeBase64.split(',')[1]; // Remove data:application/pdf;base64, prefix

        // Submit form to worker endpoint (using contact endpoint with type indicator)
        try {
          const response = await fetch('https://anagha-contact.jasti.workers.dev/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              type: 'job_application',
              jobTitle,
              jobId,
              name: formData.fullName,
              email: formData.email,
              phone: formData.phone,
              organisation: formData.currentJobTitle, // Using organisation field for current job title
              subject: `Job Application: ${jobTitle}`,
              message: `Job Application Details:
Location: ${formData.location}
Current Job Title: ${formData.currentJobTitle}
Years of Experience: ${formData.yearsOfExperience}
Availability/Start Date: ${formData.availabilityDate}
Desired Salary Range: ${formData.desiredSalaryRange || 'Not specified'}
Willing to Relocate: ${formData.willingToRelocate === 'yes' ? 'Yes' : 'No'}`,
              resume: {
                filename: resumeFile.name,
                content: resumeData,
                type: resumeFile.type,
              },
              // If CAPTCHA is disabled, use test token; otherwise use the actual token
              turnstileToken: turnstileToken || "test-token-captcha-disabled",
            }),
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.error || 'Failed to submit application');
          }

          toast({
            title: "Application submitted successfully!",
            description: "We'll review your application and get back to you soon.",
          });

          // Reset form
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            location: "",
            currentJobTitle: "",
            yearsOfExperience: "",
            availabilityDate: "",
            desiredSalaryRange: "",
            willingToRelocate: "no",
          });
          setResumeFile(null);
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }

          // Reset Turnstile
          setTurnstileToken("");
          if (turnstileWidgetId.current && window.turnstile) {
            window.turnstile.reset(turnstileWidgetId.current);
          }

          // Close dialog after success
          setTimeout(() => {
            onClose();
          }, 1500);
        } catch (error) {
          toast({
            title: "Error submitting application",
            description: error instanceof Error ? error.message : "Please try again later.",
            variant: "destructive",
          });
        } finally {
          setIsSubmitting(false);
        }
      };

      reader.onerror = () => {
        toast({
          title: "Error reading file",
          description: "Please try uploading your resume again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ApplicationFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ApplicationFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Validation Error",
          description: "Please check the form and try again.",
          variant: "destructive",
        });
      }
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground mb-1">Applying for: {jobTitle}</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={errors.fullName ? "border-destructive" : ""}
          />
          {errors.fullName && (
            <p className="text-sm text-destructive mt-1">{errors.fullName}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-sm text-destructive mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && (
            <p className="text-sm text-destructive mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <Label htmlFor="location">Location (City, State/Country) *</Label>
          <Input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g., Bangalore, Karnataka, India"
            className={errors.location ? "border-destructive" : ""}
          />
          {errors.location && (
            <p className="text-sm text-destructive mt-1">{errors.location}</p>
          )}
        </div>

        <div>
          <Label htmlFor="currentJobTitle">Current Job Title *</Label>
          <Input
            id="currentJobTitle"
            name="currentJobTitle"
            value={formData.currentJobTitle}
            onChange={handleChange}
            className={errors.currentJobTitle ? "border-destructive" : ""}
          />
          {errors.currentJobTitle && (
            <p className="text-sm text-destructive mt-1">{errors.currentJobTitle}</p>
          )}
        </div>

        <div>
          <Label htmlFor="yearsOfExperience">Years of Experience *</Label>
          <Select
            value={formData.yearsOfExperience}
            onValueChange={(value) => {
              setFormData((prev) => ({ ...prev, yearsOfExperience: value }));
              if (errors.yearsOfExperience) {
                setErrors((prev) => ({ ...prev, yearsOfExperience: undefined }));
              }
            }}
          >
            <SelectTrigger className={errors.yearsOfExperience ? "border-destructive" : ""}>
              <SelectValue placeholder="Select years of experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-1">0-1 years</SelectItem>
              <SelectItem value="2-3">2-3 years</SelectItem>
              <SelectItem value="4-5">4-5 years</SelectItem>
              <SelectItem value="6-8">6-8 years</SelectItem>
              <SelectItem value="9-12">9-12 years</SelectItem>
              <SelectItem value="13+">13+ years</SelectItem>
            </SelectContent>
          </Select>
          {errors.yearsOfExperience && (
            <p className="text-sm text-destructive mt-1">{errors.yearsOfExperience}</p>
          )}
        </div>

        <div>
          <Label htmlFor="availabilityDate">Availability / Start Date *</Label>
          <Input
            id="availabilityDate"
            name="availabilityDate"
            type="date"
            value={formData.availabilityDate}
            onChange={handleChange}
            className={errors.availabilityDate ? "border-destructive" : ""}
          />
          {errors.availabilityDate && (
            <p className="text-sm text-destructive mt-1">{errors.availabilityDate}</p>
          )}
        </div>

        <div>
          <Label htmlFor="desiredSalaryRange">Desired Salary Range (Optional)</Label>
          <Input
            id="desiredSalaryRange"
            name="desiredSalaryRange"
            value={formData.desiredSalaryRange}
            onChange={handleChange}
            placeholder="e.g., ₹10-12 LPA"
          />
        </div>

        <div>
          <Label>Willing to Relocate? *</Label>
          <RadioGroup
            value={formData.willingToRelocate}
            onValueChange={(value) => {
              setFormData((prev) => ({ ...prev, willingToRelocate: value as "yes" | "no" }));
              if (errors.willingToRelocate) {
                setErrors((prev) => ({ ...prev, willingToRelocate: undefined }));
              }
            }}
            className="mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="relocate-yes" />
              <Label htmlFor="relocate-yes" className="font-normal cursor-pointer">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="relocate-no" />
              <Label htmlFor="relocate-no" className="font-normal cursor-pointer">No</Label>
            </div>
          </RadioGroup>
          {errors.willingToRelocate && (
            <p className="text-sm text-destructive mt-1">{errors.willingToRelocate}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="resume">Resume *</Label>
        <div className="mt-2">
          {!resumeFile ? (
            <div className="flex items-center gap-4">
              <input
                ref={fileInputRef}
                type="file"
                id="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                aria-label="Upload resume file"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="w-full"
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload Resume (PDF or Word)
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-between p-3 border rounded-md bg-muted/50">
              <div className="flex items-center gap-2">
                <File className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-foreground">{resumeFile.name}</span>
                <span className="text-xs text-muted-foreground">
                  ({(resumeFile.size / 1024).toFixed(1)} KB)
                </span>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleRemoveFile}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          )}
          <p className="text-xs text-muted-foreground mt-2">
            Accepted formats: PDF, DOC, DOCX (Max 5MB)
          </p>
        </div>
      </div>

      {/* Cloudflare Turnstile - DISABLED */}
      {false && TURNSTILE_SITE_KEY && (
        <div>
          <div ref={turnstileRef} className="flex justify-center"></div>
          {turnstileError && (
            <p className="text-sm text-destructive mt-2 text-center">{turnstileError}</p>
          )}
        </div>
      )}

      <div className="flex gap-3 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className="flex-1"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="secondary"
          disabled={isSubmitting}
          className="flex-1"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
    </form>
  );
};

export default JobApplicationForm;

