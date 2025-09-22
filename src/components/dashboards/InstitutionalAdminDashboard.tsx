
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { NotificationBell } from '@/components/ui/notification-bell';
import { 
  Building2, 
  Users, 
  BarChart3, 
  Settings, 
  TrendingUp, 
  Calendar, 
  User, 
  Bell,
  ChevronRight,
  MapPin,
  Clock,
  Activity,
  DollarSign
} from 'lucide-react';

export const InstitutionalAdminDashboard = () => {
  const { user, logout } = useAuth();

  const clinicStats = [
    { label: 'Total Practitioners', value: '24', change: '+2', trend: 'up' },
    { label: 'Active Patients', value: '156', change: '+12', trend: 'up' },
    { label: 'Room Utilization', value: '87%', change: '+5%', trend: 'up' },
    { label: 'Revenue This Month', value: '₹2.4L', change: '+18%', trend: 'up' },
  ];

  const departments = [
    { name: 'Panchakarma', practitioners: 8, patients: 45, utilization: 92 },
    { name: 'Consultation', practitioners: 6, patients: 38, utilization: 78 },
    { name: 'Ayurvedic Pharmacy', practitioners: 4, patients: 25, utilization: 65 },
    { name: 'Wellness Center', practitioners: 6, patients: 48, utilization: 85 },
  ];

  const recentAlerts = [
    { id: 1, type: 'resource', message: 'Low inventory: Ayurvedic oils', priority: 'high' },
    { id: 2, type: 'staff', message: 'Dr. Sharma scheduled leave next week', priority: 'medium' },
    { id: 3, type: 'system', message: 'Equipment maintenance due', priority: 'low' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20"style={{ backgroundColor: '#FFF9F3' }}>
      {/* Header */}
      <div className="bg-card/80 backdrop-blur-sm border-b border-border shadow-sm"style = {{color: '#AF4F06'}}>
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
                <h1 className="text-xl font-semibold text-foreground"style = {{color: '#AF4F06'}}>PanchArogya - Admin Portal</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <NotificationBell />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Building2 className="h-4 w-4 text-primary"style = {{color: '#AF4F06'}} />
                </div>
                <span className="text-sm font-medium">{user?.name}</span>
              </div>
              <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-[#AF4F06] hover:bg-[#AF4F06]/30 transition-colors"
                                              onClick={logout}>
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
            <h2 className="text-3xl font-bold text-foreground"style = {{color: '#AF4F06'}}>Clinic Overview</h2>
            <p className="text-muted-foreground">Manage your healthcare institution efficiently</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {clinicStats.map((stat, index) => (
<Card
  key={index}
  className="bg-[#AF4F06]/5 border-[#AF4F06]/20"
>                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-primary"style = {{color: '#AF4F06'}}>{stat.label}</p>
                      <p className="text-2xl font-bold text-primary"style = {{color: '#AF4F06'}}>{stat.value}</p>
                      <div className="flex items-center mt-1">
                        <TrendingUp className="h-3 w-3 text-success mr-1"/>
                        <span className="text-xs text-success" >{stat.change}</span>
                      </div>
                    </div>
                    <div className="text-primary"style = {{color: '#AF4F06'}}>
                      {index === 0 && <Users className="h-8 w-8" />}
                      {index === 1 && <Activity className="h-8 w-8" />}
                      {index === 2 && <MapPin className="h-8 w-8" />}
                      {index === 3 && <DollarSign className="h-8 w-8" />}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Department Overview */}
              <Card style = {{color: '#AF4F06'}}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building2 className="h-5 w-5 text-primary" style = {{color: '#AF4F06'}}/>
                    <span>Department Management</span>
                  </CardTitle>
                  <CardDescription>Resource allocation and utilization</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {departments.map((dept, index) => (
<div
  key={index}
  className="p-4 rounded-lg border border-[#AF4F06] text-[#AF4F06] hover:bg-[#AF4F06]/10 transition-colors"
>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium">{dept.name}</h4>
                        <Badge variant="outline">{dept.utilization}% utilized</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Practitioners:</span>
                          <span className="font-medium">{dept.practitioners}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Active Patients:</span>
                          <span className="font-medium">{dept.patients}</span>
                        </div>
                      </div>
                      <div className="mt-3 bg-muted/30 rounded-full h-2">
                        <div 
                          className="bg-primary rounded-full h-2 transition-all duration-300"
                          style = {{background: '#AF4F06'
                          ,width: `${dept.utilization}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  <Button
  variant="outline"
  size="sm"
  className="w-full border-[#AF4F06] text-[#AF4F06] hover:bg-[#AF4F06]/30 transition-colors"
>
                    <Settings className="h-4 w-4 mr-2" />
                    Manage Departments
                  </Button>
                </CardContent>
              </Card>

              {/* Analytics Dashboard */}
              <Card style = {{color: '#AF4F06'}}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-primary" style = {{color: '#AF4F06'}}/>
                    <span>Clinic Analytics</span>
                  </CardTitle>
                  <CardDescription>Performance metrics and trends</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-success/10 to-success/5 rounded-lg">
                      <div className="text-2xl font-bold text-success">94%</div>
                      <p className="text-sm text-muted-foreground">Patient Satisfaction</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-warning/10 to-warning/5 rounded-lg">
                      <div className="text-2xl font-bold text-warning">87%</div>
                      <p className="text-sm text-muted-foreground">Treatment Success</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Monthly Revenue Growth</span>
                      <span className="font-medium text-success">+18%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Average Waiting Time</span>
                      <span className="font-medium">12 minutes</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Equipment Efficiency</span>
                      <span className="font-medium text-success">92%</span>
                    </div>
                  </div>
                  
<Button
  variant="outline"
  size="sm"
  className="w-full border-[#AF4F06] text-[#AF4F06] hover:bg-[#AF4F06]/30 transition-colors"
>
                      View Detailed Reports
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* System Alerts */}
              <Card style = {{color: '#AF4F06'}}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5 text-primary" style = {{color: '#AF4F06'}}/>
                    <span>System Alerts</span>
                  </CardTitle>
                  <CardDescription>Important notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium">{alert.message}</p>
                          <p className="text-xs text-muted-foreground mt-1 capitalize">
                            {alert.type} • {alert.priority} priority
                          </p>
                        </div>
                        <Badge 
                          variant={
                            alert.priority === 'high' ? 'destructive' :
                            alert.priority === 'medium' ? 'default' : 'secondary'
                          }
                          className="text-xs"
                        >
                          {alert.priority}
                        </Badge>
                      </div>
                    </div>
                  ))}
<Button
  variant="outline"
  size="sm"
  className="w-full border-[#AF4F06] text-[#AF4F06] hover:bg-[#AF4F06]/30 transition-colors"
>
                      View All Alerts
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card style = {{color: '#AF4F06'}}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="h-5 w-5 text-primary" style = {{color: '#AF4F06'}} />
                    <span>Quick Actions</span>
                  </CardTitle>
                  <CardDescription>Frequently used functions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between hover:bg-[#AF4F06]/30"
                  > 

                    <span>Staff Scheduling</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button
  variant="ghost"
  size="sm"
  className="w-full justify-between hover:bg-[#AF4F06]/30"
> 

                    <span>Resource Management</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button
  variant="ghost"
  size="sm"
  className="w-full justify-between hover:bg-[#AF4F06]/30"
> 

                    <span>Patient Registration</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button
  variant="ghost"
  size="sm"
  className="w-full justify-between hover:bg-[#AF4F06]/30"
> 

                    <span>Billing & Reports</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Hospital Integration */}
              <Card style = {{color: '#AF4F06'}}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-primary" style = {{color: '#AF4F06'}} />
                    <span>Integrations</span>
                  </CardTitle>
                  <CardDescription>Connected systems</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">HMIS System</span>
                      <Badge variant="default" className="text-xs">Connected</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Pharmacy System</span>
                      <Badge variant="default" className="text-xs">Connected</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Lab Reports</span>
                      <Badge variant="secondary" className="text-xs">Pending</Badge>
                    </div>
                  </div>
<Button
  variant="outline"
  size="sm"
  className="w-full border-[#AF4F06] text-[#AF4F06] hover:bg-[#AF4F06]/30 transition-colors"
>
                      Manage Integrations
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