import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Trash2, Plus, Edit, LogOut, CheckCircle, AlertCircle, ArrowUp, ArrowDown } from "lucide-react";
import { getJobs, saveJobs, type JobPost } from "@/data/jobs";
import { toast } from "sonner";

const AdminJobs = () => {
  const [jobs, setJobs] = useState<JobPost[]>([]);
  const [editingJob, setEditingJob] = useState<JobPost | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAuth = async () => {
      const token = sessionStorage.getItem("admin_token");
      const expiry = sessionStorage.getItem("admin_token_expiry");

      if (!token || !expiry) {
        navigate("/admin/login");
        return;
      }

      // Check if token is expired
      if (Date.now() > parseInt(expiry)) {
        sessionStorage.removeItem("admin_token");
        sessionStorage.removeItem("admin_token_expiry");
        sessionStorage.removeItem("admin_authenticated");
        sessionStorage.removeItem("admin_session_time");
        navigate("/admin/login");
        return;
      }

      // Verify token with worker
      try {
        const response = await fetch('https://anagha-contact.jasti.workers.dev/api/admin/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token,
            expiry,
          }),
        });

        const data = await response.json();

        if (!data.valid) {
          // Token is invalid, clear session and redirect
          sessionStorage.removeItem("admin_token");
          sessionStorage.removeItem("admin_token_expiry");
          sessionStorage.removeItem("admin_authenticated");
          sessionStorage.removeItem("admin_session_time");
          navigate("/admin/login");
          return;
        }

        // Token is valid, load jobs
        setJobs(getJobs());
      } catch (error) {
        console.error('Token verification error:', error);
        // On error, clear session and redirect
        sessionStorage.removeItem("admin_token");
        sessionStorage.removeItem("admin_token_expiry");
        sessionStorage.removeItem("admin_authenticated");
        sessionStorage.removeItem("admin_session_time");
        navigate("/admin/login");
      }
    };

    verifyAuth();
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("admin_token");
    sessionStorage.removeItem("admin_token_expiry");
    sessionStorage.removeItem("admin_authenticated");
    sessionStorage.removeItem("admin_session_time");
    navigate("/admin/login");
  };

  const handleAddNew = () => {
    setEditingJob({
      id: Date.now().toString(),
      title: "",
      location: "",
      type: "Full-time",
      department: "",
      description: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    setIsDialogOpen(true);
  };

  const handleEdit = (job: JobPost) => {
    setEditingJob({ ...job });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this job posting?")) {
      const updatedJobs = jobs.filter((job) => job.id !== id);
      setJobs(updatedJobs);
      saveJobs(updatedJobs);
      toast.success("Job deleted", {
        description: "The job posting has been removed.",
      });
    }
  };

  const handleSave = () => {
    if (!editingJob) return;

    // Validation
    if (!editingJob.title || !editingJob.location || !editingJob.department || !editingJob.description) {
      toast.error("Validation Error", {
        description: "Please fill in all required fields.",
      });
      return;
    }

    const updatedJob = {
      ...editingJob,
      updatedAt: new Date().toISOString(),
    };

    let updatedJobs: JobPost[];
    if (jobs.find((j) => j.id === editingJob.id)) {
      // Update existing
      updatedJobs = jobs.map((job) =>
        job.id === editingJob.id ? updatedJob : job
      );
    } else {
      // Add new
      updatedJobs = [...jobs, updatedJob];
    }

    setJobs(updatedJobs);
    saveJobs(updatedJobs);
    setIsDialogOpen(false);
    setEditingJob(null);
    setSuccess("Job posting saved successfully!");
    setTimeout(() => setSuccess(""), 3000);
    
    toast.success("Success", {
      description: "Job posting has been saved.",
    });
  };

  const handleMoveUp = (index: number) => {
    if (index === 0) return; // Already at top
    
    const newJobs = [...jobs];
    [newJobs[index - 1], newJobs[index]] = [newJobs[index], newJobs[index - 1]];
    setJobs(newJobs);
    saveJobs(newJobs);
    toast.success("Job moved up");
  };

  const handleMoveDown = (index: number) => {
    if (index === jobs.length - 1) return; // Already at bottom
    
    const newJobs = [...jobs];
    [newJobs[index], newJobs[index + 1]] = [newJobs[index + 1], newJobs[index]];
    setJobs(newJobs);
    saveJobs(newJobs);
    toast.success("Job moved down");
  };

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Job Postings Admin</h1>
            <p className="text-muted-foreground">Manage job postings for the Careers page</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => navigate("/careers")}>
              View Careers Page
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {success && (
          <Alert className="mb-6 border-green-500 bg-green-50 dark:bg-green-950">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800 dark:text-green-200">
              {success}
            </AlertDescription>
          </Alert>
        )}

        <div className="mb-6">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={handleAddNew}>
                <Plus className="w-4 h-4 mr-2" />
                Add New Job
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingJob && jobs.find((j) => j.id === editingJob.id)
                    ? "Edit Job Posting"
                    : "Add New Job Posting"}
                </DialogTitle>
                <DialogDescription>
                  Fill in the details for the job posting
                </DialogDescription>
              </DialogHeader>
              {editingJob && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Job Title *</Label>
                    <Input
                      id="title"
                      value={editingJob.title}
                      onChange={(e) =>
                        setEditingJob({ ...editingJob, title: e.target.value })
                      }
                      placeholder="e.g., Senior Software Engineer"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location *</Label>
                      <Input
                        id="location"
                        value={editingJob.location}
                        onChange={(e) =>
                          setEditingJob({
                            ...editingJob,
                            location: e.target.value,
                          })
                        }
                        placeholder="e.g., Bangalore, India"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Job Type *</Label>
                      <Input
                        id="type"
                        value={editingJob.type}
                        onChange={(e) =>
                          setEditingJob({ ...editingJob, type: e.target.value })
                        }
                        placeholder="e.g., Full-time, Contract"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department *</Label>
                    <Input
                      id="department"
                      value={editingJob.department}
                      onChange={(e) =>
                        setEditingJob({
                          ...editingJob,
                          department: e.target.value,
                        })
                      }
                      placeholder="e.g., Engineering, Sales"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      value={editingJob.description}
                      onChange={(e) =>
                        setEditingJob({
                          ...editingJob,
                          description: e.target.value,
                        })
                      }
                      placeholder="Job description and requirements..."
                      rows={6}
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsDialogOpen(false);
                        setEditingJob(null);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button onClick={handleSave}>Save Job</Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>

        <div className="space-y-4">
          {jobs.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">
                  No job postings yet. Click "Add New Job" to create one.
                </p>
              </CardContent>
            </Card>
          ) : (
            jobs.map((job, index) => (
              <Card key={job.id}>
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      {/* Reorder Controls */}
                      <div className="flex flex-col gap-1 pt-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => handleMoveUp(index)}
                          disabled={index === 0}
                          title="Move up"
                        >
                          <ArrowUp className="w-3 h-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => handleMoveDown(index)}
                          disabled={index === jobs.length - 1}
                          title="Move down"
                        >
                          <ArrowDown className="w-3 h-3" />
                        </Button>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <CardDescription className="space-y-1">
                          <div className="flex flex-wrap gap-2">
                            <span className="text-sm">📍 {job.location}</span>
                            <span className="text-sm">⏰ {job.type}</span>
                            <span className="text-sm">💼 {job.department}</span>
                          </div>
                          <p className="mt-2">{job.description}</p>
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(job)}
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(job.id)}
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminJobs;

