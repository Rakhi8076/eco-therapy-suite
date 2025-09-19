import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { NotificationBell } from '@/components/ui/notification-bell';
import { 
  Shield, 
  Globe, 
  BarChart3, 
  Settings, 
  Users, 
  Database, 
  User, 
  Bell,
  ChevronRight,
  TrendingUp,
  Lock,
  Activity,
  AlertTriangle,
  Server
} from 'lucide-react';

export const SuperAdminDashboard = () => {
  const { user, logout } = useAuth();

  const platformStats = [
    { label: 'Total Institutions', value: '47', change: '+3', trend: 'up' },
    { label: 'Active Practitioners', value: '892', change: '+24', trend: 'up' },
    { label: 'Total Patients', value: '12.4K', change: '+156', trend: 'up' },
    { label: 'System Uptime', value: '99.9%', change: '0%', trend: 'stable' },
  ];

  const institutions = [
    { name: 'Ayurvedic Medical College', location: 'Mumbai', practitioners: 45, patients: 1200, status: 'active' },
    { name: 'Panchakarma Center Delhi', location: 'Delhi', practitioners: 32, patients: 890, status: 'active' },
    { name: 'Kerala Ayurveda Hospital', location: 'Kochi', practitioners: 28, patients: 756, status: 'active' },
    { name: 'Wellness Center Pune', location: 'Pune', practitioners: 18, patients: 445, status: 'maintenance' },
  ];

  const securityAlerts = [
    { id: 1, type: 'security', message: 'Multiple failed login attempts detected', severity: 'high', time: '5 min ago' },
    { id: 2, type: 'compliance', message: 'HIPAA audit report due next week', severity: 'medium', time: '2 hours ago' },
    { id: 3, type: 'system', message: 'Database backup completed successfully', severity: 'low', time: '6 hours ago' },
  ];

  const globalMetrics = [
    { metric: 'Average Response Time', value: '245ms', status: 'good' },
    { metric: 'Data Processing Rate', value: '1.2M/day', status: 'good' },
    { metric: 'Error Rate', value: '0.02%', status: 'excellent' },
    { metric: 'User Satisfaction', value: '94.5%', status: 'good' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20">
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
                <h1 className="text-xl font-semibold text-foreground">PanchArogya - Super Admin</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <NotificationBell />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{user?.name}</span>
              </div>
              <Button variant="ghost" onClick={logout} size="sm">
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
            <h2 className="text-3xl font-bold text-foreground">Platform Overview</h2>
            <p className="text-muted-foreground">Monitor and manage the entire PanchArogya ecosystem</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {platformStats.map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-primary">{stat.label}</p>
                      <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      {stat.trend !== 'stable' && (
                        <div className="flex items-center mt-1">
                          <TrendingUp className="h-3 w-3 text-success mr-1" />
                          <span className="text-xs text-success">{stat.change}</span>
                        </div>
                      )}
                    </div>
                    <div className="text-primary">
                      {index === 0 && <Globe className="h-8 w-8" />}
                      {index === 1 && <Users className="h-8 w-8" />}
                      {index === 2 && <Activity className="h-8 w-8" />}
                      {index === 3 && <Server className="h-8 w-8" />}
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
              {/* Institution Management */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <span>Institution Management</span>
                  </CardTitle>
                  <CardDescription>Oversee all connected healthcare institutions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {institutions.map((institution, index) => (
                    <div key={index} className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium">{institution.name}</h4>
                          <p className="text-sm text-muted-foreground">{institution.location}</p>
                        </div>
                        <Badge 
                          variant={institution.status === 'active' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {institution.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Practitioners:</span>
                          <span className="font-medium">{institution.practitioners}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Patients:</span>
                          <span className="font-medium">{institution.patients}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    <Settings className="h-4 w-4 mr-2" />
                    Manage Institutions
                  </Button>
                </CardContent>
              </Card>

              {/* Global Analytics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span>Global Analytics</span>
                  </CardTitle>
                  <CardDescription>Platform-wide performance metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-success/10 to-success/5 rounded-lg">
                      <div className="text-2xl font-bold text-success">98.5%</div>
                      <p className="text-sm text-muted-foreground">Platform Availability</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-warning/10 to-warning/5 rounded-lg">
                      <div className="text-2xl font-bold text-warning">2.4M</div>
                      <p className="text-sm text-muted-foreground">Monthly Transactions</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {globalMetrics.map((metric, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm">{metric.metric}</span>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{metric.value}</span>
                          <Badge 
                            variant={
                              metric.status === 'excellent' ? 'default' :
                              metric.status === 'good' ? 'secondary' : 'outline'
                            }
                            className="text-xs"
                          >
                            {metric.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Advanced Analytics
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Security & Compliance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lock className="h-5 w-5 text-primary" />
                    <span>Security Alerts</span>
                  </CardTitle>
                  <CardDescription>System security monitoring</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {securityAlerts.map((alert) => (
                    <div key={alert.id} className="p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <p className="text-sm font-medium">{alert.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {alert.time}
                          </p>
                        </div>
                        <Badge 
                          variant={
                            alert.severity === 'high' ? 'destructive' :
                            alert.severity === 'medium' ? 'default' : 'secondary'
                          }
                          className="text-xs"
                        >
                          {alert.severity}
                        </Badge>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full">
                    Security Dashboard
                  </Button>
                </CardContent>
              </Card>

              {/* System Configuration */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="h-5 w-5 text-primary" />
                    <span>Platform Settings</span>
                  </CardTitle>
                  <CardDescription>System configuration</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="ghost" className="w-full justify-between" size="sm">
                    <span>User Management</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between" size="sm">
                    <span>System Configuration</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between" size="sm">
                    <span>Data Management</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between" size="sm">
                    <span>API Management</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* System Health */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-primary" />
                    <span>System Health</span>
                  </CardTitle>
                  <CardDescription>Real-time monitoring</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Database Status</span>
                      <Badge variant="default" className="text-xs">Healthy</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">API Services</span>
                      <Badge variant="default" className="text-xs">Online</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Backup Systems</span>
                      <Badge variant="default" className="text-xs">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Security Monitoring</span>
                      <Badge variant="default" className="text-xs">Enabled</Badge>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    System Monitor
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