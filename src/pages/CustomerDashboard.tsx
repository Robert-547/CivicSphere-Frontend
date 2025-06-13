
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  MapPin,
  DollarSign,
  Phone,
  MessageCircle,
  Star,
  Edit,
  Trash2
} from 'lucide-react';
import Header from '@/components/Header';
import { useJobs } from '@/contexts/JobContext';
import JobForm, { JobFormData } from '@/components/JobManagement/JobForm';

const CustomerDashboard = () => {
  const [showJobForm, setShowJobForm] = useState(false);
  const [editingJob, setEditingJob] = useState<number | null>(null);
  const { jobs, addJob, updateJob, getJobsByCustomer } = useJobs();

  // Mock customer info (this would come from auth)
  const customerName = 'Current User';
  const userJobs = getJobsByCustomer(customerName);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'warning';
      case 'in-progress': return 'default';
      case 'completed': return 'success';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <AlertCircle className="h-4 w-4" />;
      case 'in-progress': return <Clock className="h-4 w-4" />;
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const handleCreateJob = (jobData: JobFormData) => {
    addJob(jobData);
    setShowJobForm(false);
  };

  const handleUpdateJob = (jobData: JobFormData) => {
    if (editingJob) {
      updateJob(editingJob, jobData);
      setEditingJob(null);
    }
  };

  const handleEditJob = (jobId: number) => {
    setEditingJob(jobId);
  };

  const handleDeleteJob = (jobId: number) => {
    if (confirm('Are you sure you want to delete this job?')) {
      // In a real app, you'd have a deleteJob function
      console.log('Deleting job:', jobId);
    }
  };

  const handleStartChat = (jobId: number) => {
    console.log('Starting chat for job:', jobId);
    // TODO: Implement chat functionality
  };

  const currentEditingJob = editingJob ? jobs.find(job => job.id === editingJob) : null;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-secondary">
      <Header userType="customer" />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Jobs</h1>
            <p className="text-muted-foreground">
              Manage your home repair and maintenance requests
            </p>
          </div>
          <Button 
            className="gradient-primary text-white"
            onClick={() => setShowJobForm(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Post New Job
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Jobs</p>
                  <p className="text-2xl font-bold">{userJobs.length}</p>
                </div>
                <AlertCircle className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">In Progress</p>
                  <p className="text-2xl font-bold">
                    {userJobs.filter(job => job.status === 'in-progress').length}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold">
                    {userJobs.filter(job => job.status === 'completed').length}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold">
                    {userJobs.filter(job => job.status === 'pending').length}
                  </p>
                </div>
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {userJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {job.status === 'completed' ? job.completedDate : job.postedDate}
                    </CardDescription>
                  </div>
                  <Badge variant={getStatusColor(job.status) as any} className="flex items-center space-x-1">
                    {getStatusIcon(job.status)}
                    <span className="capitalize">{job.status}</span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {job.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                      {job.budget}
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                      {job.category}
                    </div>
                  </div>

                  {/* Worker Info (for accepted/completed jobs) */}
                  {job.worker && (
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{job.worker}</p>
                          <div className="flex items-center mt-1">
                            <Star className="h-4 w-4 text-warning mr-1" />
                            <span className="text-sm">{job.workerRating}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {job.workerPhone && (
                            <Button variant="outline" size="sm">
                              <Phone className="h-4 w-4 mr-1" />
                              Call
                            </Button>
                          )}
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleStartChat(job.id)}
                          >
                            <MessageCircle className="h-4 w-4 mr-1" />
                            Chat
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Pending job info */}
                  {job.status === 'pending' && job.proposals && (
                    <div className="bg-warning/10 p-4 rounded-lg">
                      <p className="text-sm">
                        <strong>{job.proposals} workers</strong> have submitted proposals for this job.
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center pt-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <div className="flex space-x-2">
                      {job.status === 'pending' && (
                        <>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEditJob(job.id)}
                          >
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleDeleteJob(job.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Delete
                          </Button>
                        </>
                      )}
                      {job.status === 'completed' && (
                        <Button variant="outline" size="sm">
                          <Star className="h-4 w-4 mr-1" />
                          Rate Worker
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {userJobs.length === 0 && (
          <div className="text-center py-12">
            <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Jobs Yet</h3>
            <p className="text-muted-foreground mb-4">
              You haven't posted any jobs yet. Get started by posting your first job!
            </p>
            <Button 
              className="gradient-primary text-white"
              onClick={() => setShowJobForm(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Post Your First Job
            </Button>
          </div>
        )}
      </main>

      {/* Job Form Modal */}
      {showJobForm && (
        <JobForm
          title="Post New Job"
          onSubmit={handleCreateJob}
          onCancel={() => setShowJobForm(false)}
        />
      )}

      {editingJob && currentEditingJob && (
        <JobForm
          title="Edit Job"
          initialData={currentEditingJob}
          onSubmit={handleUpdateJob}
          onCancel={() => setEditingJob(null)}
        />
      )}
    </div>
  );
};

export default CustomerDashboard;
