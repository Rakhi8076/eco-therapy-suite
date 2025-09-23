import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { PatientSearch } from '@/components/ui/patient-search';
import { QueueManagement } from '@/components/ui/queue-management';
import { NotificationBell } from '@/components/ui/notification-bell';
import {
  Users,
  Search,
  Calendar,
  Activity,
  BarChart3,
  Clock,
  User,
  Bell,
  ChevronRight,
  Heart,
  Stethoscope,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

// Example call requests data
const callRequestsData = [
  { id: 1, patientName: 'Ravi Kumar', requestedAt: '10:30 AM' },
  { id: 2, patientName: 'Priya Singh', requestedAt: '11:15 AM' },
];

const DoctorCallRequestsCard = () => {
  const [requests, setRequests] = useState(callRequestsData);

  const acceptRequest = (id) => {
    setRequests((prev) => prev.filter((req) => req.id !== id));
    alert(`Call request from patient accepted!`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <AlertCircle className="h-5 w-5 text-destructive" />
          <span>Patient Call Requests</span>
        </CardTitle>
        <CardDescription>Patients requesting a call</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {requests.length === 0 ? (
          <p>No pending call requests.</p>
        ) : (
          requests.map((req) => (
            <div key={req.id} className="flex justify-between items-center border border-destructive rounded p-3">
              <div>
                <p className="font-medium">{req.patientName}</p>
                <p className="text-sm text-muted-foreground">Requested at: {req.requestedAt}</p>
              </div>
              <Button size="sm" variant="destructive" onClick={() => acceptRequest(req.id)}>
                Accept
              </Button>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export const PractitionerDashboard = () => {
  const { user, logout } = useAuth();
  const [activeView, setActiveView] = useState<'patients' | 'queue'>('patients');

  const todayPatients = [
    { id: 1, name: 'Ravi Kumar', time: '10:00 AM', therapy: 'Abhyanga', status: 'confirmed' },
    { id: 2, name: 'Priya Singh', time: '11:30 AM', therapy: 'Shirodhara', status: 'in-progress' },
    { id: 3, name: 'Amit Sharma', time: '2:00 PM', therapy: 'Consultation', status: 'waiting' },
    { id: 4, name: 'Sunita Devi', time: '3:30 PM', therapy: 'Panchakarma', status: 'scheduled' },
  ];

  const recentVitals = [
    { patient: 'Ravi Kumar', metric: 'Blood Pressure', value: '120/80', status: 'normal' },
    { patient: 'Priya Singh', metric: 'Heart Rate', value: '72 bpm', status: 'normal' },
    { patient: 'Amit Sharma', metric: 'Temperature', value: '98.6°F', status: 'elevated' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-muted/30 to-accent/20" style={{ backgroundColor: '#FFF9F3' }}>
      {/* Header */}
      <div className="bg-card/80 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="mx-auto w-12 h-12 rounded-full shadow-lg overflow-hidden">
                <img
                  src="/logo.png"
                  alt="App Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground" style={{ color: '#AF4F06' }}>AyurSutra - Practitioner</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4" style={{ color: '#AF4F06' }}>
              <NotificationBell />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Stethoscope className="h-4 w-4 text-primary" style={{ color: '#AF4F06' }} />
                </div>
                <span className="text-sm font-medium">Dr. {user?.name}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-[#AF4F06] hover:bg-[#AF4F06]/30 transition-colors"
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground" style={{ color: '#AF4F06' }}>Good morning, Dr. {user?.name}!</h2>
            <p className="text-muted-foreground">You have 4 appointments today. Let's help your patients on their wellness journey.</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-[#AF4F06]/5 border-[#AF4F06]/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#AF4F06]">
                      Today's Patients
                    </p>
                    <p className="text-2xl font-bold text-[#AF4F06]">4</p>
                  </div>
                  <Users className="h-8 w-8 text-[#AF4F06]" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-success">Completed Sessions</p>
                    <p className="text-2xl font-bold text-success">1</p>
                  </div>
                  <Activity className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-warning">Pending Reviews</p>
                    <p className="text-2xl font-bold text-warning">3</p>
                  </div>
                  <Clock className="h-8 w-8 text-warning" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-destructive">Alerts</p>
                    <p className="text-2xl font-bold text-destructive">1</p>
                  </div>
                  <AlertCircle className="h-8 w-8 text-destructive" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Patient Management */}
              <Card style={{ color: '#AF4F06' }}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-primary" style={{ color: '#AF4F06' }} />
                        <span>Patient Management</span>
                      </CardTitle>
                      <CardDescription>Search and manage your patients</CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant={activeView === 'patients' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setActiveView('patients')}
                        style={{ background: '#AF4F06' }}
                      >
                        Patients
                      </Button>
                      <Button
                        variant={activeView === 'queue' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setActiveView('queue')}
                        style={{ background: '#AF4F06' }}
                      >
                        Queue
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>{activeView === 'patients' ? <PatientSearch /> : <QueueManagement />}</CardContent>
              </Card>

              {/* Health Monitoring */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-primary" style={{ color: '#AF4F06' }} />
                    <span>Health Monitoring</span>
                  </CardTitle>
                  <CardDescription>Latest patient vitals and IoT data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentVitals.map((vital, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg border border-[#AF4F06] text-[#AF4F06] hover:bg-[#AF4F06]/10 transition-colors"
                    >
                      <div>
                        <h4 className="font-medium text-sm">{vital.patient}</h4>
                        <p className="text-sm text-muted-foreground">{vital.metric}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{vital.value}</p>
                        <Badge
                          variant={vital.status === 'normal' ? 'default' : 'destructive'}
                          className="text-xs"
                        >
                          {vital.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-[#AF4F06] text-[#AF4F06] hover:bg-[#AF4F06]/30 transition-colors"
                  >
                    <BarChart3 className="h-4 w-4 mr-2" style={{ color: '#AF4F06' }} />
                    View Analytics
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Patient Call Requests Card Added Here */}
              <DoctorCallRequestsCard />

              {/* Queue Optimization */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" style={{ color: '#AF4F06' }} />
                    <span>Queue Status</span>
                  </CardTitle>
                  <CardDescription>Real-time queue management</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-gradient-to-br from-success/10 to-success/5 rounded-lg">
                    <div className="text-2xl font-bold text-success mb-2">3</div>
                    <p className="text-sm text-muted-foreground">Patients in queue</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Average wait time</span>
                      <span className="font-medium">12 mins</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Next appointment</span>
                      <span className="font-medium">11:30 AM</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-[#AF4F06] text-[#AF4F06] hover:bg-[#AF4F06]/30"
                  >
                    Optimize Queue
                  </Button>
                </CardContent>
              </Card>

              {/* Therapy Management */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-primary" style={{ color: '#AF4F06' }} />
                    <span>Therapy Sessions</span>
                  </CardTitle>
                  <CardDescription>Manage treatments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="ghost" size="sm" className="w-full justify-between hover:bg-[#AF4F06]/30 transition-colors">
                    <span>Create Treatment Plan</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-between hover:bg-[#AF4F06]/30 transition-colors">
                    <span>Update Progress</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-between hover:bg-[#AF4F06]/30 transition-colors">
                    <span>Schedule Follow-up</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Analytics Preview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary" style={{ color: '#AF4F06' }} />
                    <span>Performance</span>
                  </CardTitle>
                  <CardDescription>This week's metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Patient satisfaction</span>
                      <span className="font-medium text-success">94%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Treatment success rate</span>
                      <span className="font-medium text-success">87%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Sessions completed</span>
                      <span className="font-medium">28</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full border-[#AF4F06] text-[#AF4F06] hover:bg-[#AF4F06]/30 transition-colors">
                    View Detailed Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
