
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
    { label: 'Total Practitioners', value: '24', change: '+2', trend: 'up', color: 'text-green-600' },
    { label: 'Active Patients', value: '156', change: '+12', trend: 'up', color: 'text-blue-600' },
    { label: 'Room Utilization', value: '87%', change: '+5%', trend: 'up', color: 'text-purple-600' },
    { label: 'Revenue This Month', value: '₹2.4L', change: '+18%', trend: 'up', color: 'text-red-600' },
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
<<<<<<< HEAD
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-400 rounded-xl flex items-center justify-center">
                <span className="text-lg font-bold text-white">P</span>
=======
              <div className="mx-auto w-12 h-12 rounded-full shadow-lg overflow-hidden">
                <img 
                src="/logo.png" 
                alt="App Logo" 
                className="w-full h-full object-cover"
                />
                </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground">PanchArogya - Admin Portal</h1>
>>>>>>> 4646b799292632e2a225766d0d31246917a1519e
              </div>
              <h1 className="text-xl font-semibold text-gray-900">PanchArogya - Admin Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <NotificationBell />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Building2 className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm font-medium">{user?.name}</span>
              </div>
              <Button 
                variant="ghost" 
                onClick={logout} 
                size="sm"
                className="text-red-600 hover:text-red-800"
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
            <h2 className="text-3xl font-bold text-gray-900">Clinic Overview</h2>
            <p className="text-gray-600">Manage your healthcare institution efficiently</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {clinicStats.map((stat, index) => (
              <Card key={index} className="border bg-white shadow hover:shadow-lg transition">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                      <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                      <div className="flex items-center mt-1">
                        <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
                        <span className="text-xs text-green-600">{stat.change}</span>
                      </div>
                    </div>
                    <div className={stat.color}>
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building2 className="h-5 w-5 text-green-600" />
                    <span>Department Management</span>
                  </CardTitle>
                  <CardDescription>Resource allocation and utilization</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium">{dept.name}</h4>
                        <Badge variant="outline">{dept.utilization}% utilized</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Practitioners:</span>
                          <span className="font-medium">{dept.practitioners}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Active Patients:</span>
                          <span className="font-medium">{dept.patients}</span>
                        </div>
                      </div>
                      <div className="mt-3 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 rounded-full h-2 transition-all duration-300"
                          style={{ width: `${dept.utilization}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    <Settings className="h-4 w-4 mr-2" />
                    Manage Departments
                  </Button>
                </CardContent>
              </Card>

              {/* Analytics Dashboard */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    <span>Clinic Analytics</span>
                  </CardTitle>
                  <CardDescription>Performance metrics and trends</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">94%</div>
                      <p className="text-sm text-gray-500">Patient Satisfaction</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">87%</div>
                      <p className="text-sm text-gray-500">Treatment Success</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Monthly Revenue Growth</span>
                      <span className="font-medium text-green-600">+18%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Average Waiting Time</span>
                      <span className="font-medium">12 minutes</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Equipment Efficiency</span>
                      <span className="font-medium text-green-600">92%</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    View Detailed Reports
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* System Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5 text-red-600" />
                    <span>System Alerts</span>
                  </CardTitle>
                  <CardDescription>Important notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium">{alert.message}</p>
                          <p className="text-xs text-gray-500 mt-1 capitalize">
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
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" size="sm">
                    View All Alerts
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="h-5 w-5 text-green-600" />
                    <span>Quick Actions</span>
                  </CardTitle>
                  <CardDescription>Frequently used functions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-between text-blue-600 hover:text-blue-800" variant="ghost" size="sm">
                    <span>Staff Scheduling</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button className="w-full justify-between text-green-600 hover:text-green-800" variant="ghost" size="sm">
                    <span>Resource Management</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button className="w-full justify-between text-purple-600 hover:text-purple-800" variant="ghost" size="sm">
                    <span>Patient Registration</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button className="w-full justify-between text-red-600 hover:text-red-800" variant="ghost" size="sm">
                    <span>Billing & Reports</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Hospital Integration */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-purple-600" />
                    <span>Integrations</span>
                  </CardTitle>
                  <CardDescription>Connected systems</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">HMIS System</span>
                      <Badge className="bg-green-600 text-white text-xs">Connected</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Pharmacy System</span>
                      <Badge className="bg-blue-600 text-white text-xs">Connected</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Lab Reports</span>
                      <Badge className="bg-red-600 text-white text-xs">Pending</Badge>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white" size="sm">
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
