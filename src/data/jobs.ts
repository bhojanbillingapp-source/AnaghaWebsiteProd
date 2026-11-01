// Job posts data - can be updated via admin interface
export interface JobPost {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

// Initial job posts - stored in localStorage when updated via admin
export const getJobs = (): JobPost[] => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('anagha_jobs');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error('Error parsing jobs from localStorage:', e);
      }
    }
  }
  
  // Default jobs
  return [
    {
      id: '1',
      title: "Senior Recruitment Consultant",
      location: "Bangalore, India",
      type: "Full-time",
      department: "Talent Acquisition",
      description: "Lead end-to-end recruitment processes for our key clients. Minimum 5 years of experience in IT recruitment required.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: "HR Business Partner",
      location: "Mumbai, India",
      type: "Full-time",
      department: "HR Consultancy",
      description: "Partner with clients to develop and implement HR strategies. Strong background in organizational development needed.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '3',
      title: "Training & Development Specialist",
      location: "Hyderabad, India",
      type: "Full-time",
      department: "Learning & Development",
      description: "Design and deliver training programs focused on technical and soft skills. Experience with blended learning required.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '4',
      title: "Talent Acquisition Coordinator",
      location: "Remote",
      type: "Contract",
      department: "Talent Acquisition",
      description: "Support recruitment activities including candidate screening, scheduling, and database management.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];
};

export const saveJobs = (jobs: JobPost[]): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('anagha_jobs', JSON.stringify(jobs));
  }
};


