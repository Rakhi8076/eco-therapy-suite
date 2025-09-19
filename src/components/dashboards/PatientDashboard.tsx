


import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { AIChatbot } from '@/components/ui/ai-chatbot';
import { CalendarScheduler } from '@/components/ui/calendar-scheduler';
import { NotificationBell } from '@/components/ui/notification-bell';
import { DietRecommendations } from '@/components/ui/diet-recommendations';
import { 
  Calendar, 
  Clock, 
  Play, 
  UtensilsCrossed, 
  MessageSquare, 
  Trophy, 
  User, 
  Bell,
  ChevronRight,
  Heart,
  Activity,
  Bot
} from 'lucide-react';

export const PatientDashboard = () => {
  const { user, logout } = useAuth();

  const upcomingSessions = [
    { id: 1, therapy: 'Abhyanga Massage', time: '10:00 AM', practitioner: 'Dr. Priya Sharma' },
    { id: 2, therapy: 'Shirodhara', time: '2:00 PM', practitioner: 'Dr. Raj Patel' },
  ];

  const todayQueue = [
    { position: 3, estimatedTime: '15 mins', therapy: 'Consultation' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-400 rounded-xl flex items-center justify-center">
                <span className="text-lg font-bold text-white">P</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">PanchArogya</h1>
            </div>
            <div className="flex items-center space-x-4">
              <NotificationBell />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-green-600" />
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
            <h2 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h2>
            <p className="text-gray-600">Continue your wellness journey with personalized Ayurvedic care</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border bg-white shadow hover:shadow-lg transition">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600">Wellness Score</p>
                  <p className="text-2xl font-bold text-green-600">85%</p>
                </div>
                <Heart className="h-8 w-8 text-green-600" />
              </CardContent>
            </Card>
            <Card className="border bg-white shadow hover:shadow-lg transition">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600">Sessions Completed</p>
                  <p className="text-2xl font-bold text-blue-600">12</p>
                </div>
                <Activity className="h-8 w-8 text-blue-600" />
              </CardContent>
            </Card>
            <Card className="border bg-white shadow hover:shadow-lg transition">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-yellow-600">Streak Days</p>
                  <p className="text-2xl font-bold text-yellow-600">7</p>
                </div>
                <Trophy className="h-8 w-8 text-yellow-600" />
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Today's Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span>Today's Schedule</span>
                  </CardTitle>
                  <CardDescription>Your therapy sessions for today</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Clock className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">{session.therapy}</h4>
                          <p className="text-sm text-gray-500">with {session.practitioner}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{session.time}</p>
                        <Badge variant="outline" className="mt-1">Confirmed</Badge>
                      </div>
                    </div>
                  ))}
                  <CalendarScheduler
                    trigger={
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule New Session
                      </Button>
                    }
                  />
                </CardContent>
              </Card>

              {/* Therapy Videos */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Play className="h-5 w-5 text-purple-600" />
                    <span>Therapy Demo Videos</span>
                  </CardTitle>
                  <CardDescription>Learn about your upcoming treatments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Abhyanga Massage', 'Shirodhara Therapy', 'Panchakarma Process', 'Meditation Guide'].map((video, index) => (
                      <div key={index} className="group cursor-pointer">
                        <div className="aspect-video bg-purple-100 rounded-lg flex items-center justify-center mb-2 group-hover:bg-purple-200 transition-colors">
                          <Play className="h-8 w-8 text-purple-600" />
                        </div>
                        <h4 className="font-medium text-sm">{video}</h4>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Live Queue */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-green-600" />
                    <span>Live Queue</span>
                  </CardTitle>
                  <CardDescription>Your current position</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {todayQueue.map((queue, index) => (
                    <div key={index} className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-3xl font-bold text-green-600 mb-2">#{queue.position}</div>
                      <p className="text-sm text-gray-500">in queue for {queue.therapy}</p>
                      <p className="text-sm font-medium mt-1">Est. wait: {queue.estimatedTime}</p>
                    </div>
                  ))}
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" size="sm">
                    Update Status
                  </Button>
                </CardContent>
              </Card>

              {/* Ayur-Visual Diet Plate */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <UtensilsCrossed className="h-5 w-5 text-yellow-600" />
                    <span>Diet Recommendations</span>
                  </CardTitle>
                  <CardDescription>Today's Ayurvedic meal plan</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-square bg-yellow-100 rounded-lg flex items-center justify-center">
                    <UtensilsCrossed className="h-12 w-12 text-yellow-600" />
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Vata Balance</span>
                      <span className="font-medium">Good</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pitta Balance</span>
                      <span className="font-medium">Moderate</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Kapha Balance</span>
                      <span className="font-medium">Good</span>
                    </div>
                  </div>
                  <DietRecommendations
                    trigger={
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white" size="sm">
                        View Full Plan
                      </Button>
                    }
                  />
                </CardContent>
              </Card>

              {/* Community Hub */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    <span>Community</span>
                  </CardTitle>
                  <CardDescription>Connect with others</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-between text-purple-600 hover:text-purple-800" variant="ghost" size="sm">
                    <span>Wellness Tips</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button className="w-full justify-between text-green-600 hover:text-green-800" variant="ghost" size="sm">
                    <span>Support Groups</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <AIChatbot
                    trigger={
                      <Button className="w-full justify-between text-blue-600 hover:text-blue-800" variant="ghost" size="sm">
                        <span>AI Wellness Assistant</span>
                        <Bot className="h-4 w-4" />
                      </Button>
                    }
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
