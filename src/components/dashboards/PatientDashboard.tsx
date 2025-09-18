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
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20">
      {/* Header */}
      <div className="bg-card/80 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">P</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground">PanchArogya</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <NotificationBell />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-primary" />
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
            <h2 className="text-3xl font-bold text-foreground">Welcome back, {user?.name}!</h2>
            <p className="text-muted-foreground">Continue your wellness journey with personalized Ayurvedic care</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-success">Wellness Score</p>
                    <p className="text-2xl font-bold text-success">85%</p>
                  </div>
                  <Heart className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-primary">Sessions Completed</p>
                    <p className="text-2xl font-bold text-primary">12</p>
                  </div>
                  <Activity className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-warning">Streak Days</p>
                    <p className="text-2xl font-bold text-warning">7</p>
                  </div>
                  <Trophy className="h-8 w-8 text-warning" />
                </div>
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
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Today's Schedule</span>
                  </CardTitle>
                  <CardDescription>Your therapy sessions for today</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{session.therapy}</h4>
                          <p className="text-sm text-muted-foreground">with {session.practitioner}</p>
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
                      <Button variant="outline" className="w-full">
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
                    <Play className="h-5 w-5 text-primary" />
                    <span>Therapy Demo Videos</span>
                  </CardTitle>
                  <CardDescription>Learn about your upcoming treatments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Abhyanga Massage', 'Shirodhara Therapy', 'Panchakarma Process', 'Meditation Guide'].map((video, index) => (
                      <div key={index} className="group cursor-pointer">
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mb-2 group-hover:from-primary/30 group-hover:to-primary/20 transition-colors">
                          <Play className="h-8 w-8 text-primary" />
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
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Live Queue</span>
                  </CardTitle>
                  <CardDescription>Your current position</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {todayQueue.map((queue, index) => (
                    <div key={index} className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-2">#{queue.position}</div>
                      <p className="text-sm text-muted-foreground">in queue for {queue.therapy}</p>
                      <p className="text-sm font-medium mt-1">Est. wait: {queue.estimatedTime}</p>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full">
                    Update Status
                  </Button>
                </CardContent>
              </Card>

              {/* Ayur-Visual Diet Plate */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <UtensilsCrossed className="h-5 w-5 text-primary" />
                    <span>Diet Recommendations</span>
                  </CardTitle>
                  <CardDescription>Today's Ayurvedic meal plan</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-square bg-gradient-to-br from-warning/20 to-warning/10 rounded-lg flex items-center justify-center">
                    <UtensilsCrossed className="h-12 w-12 text-warning" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Vata Balance</span>
                      <span className="font-medium">Good</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Pitta Balance</span>
                      <span className="font-medium">Moderate</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Kapha Balance</span>
                      <span className="font-medium">Good</span>
                    </div>
                  </div>
                  <DietRecommendations
                    trigger={
                      <Button variant="outline" size="sm" className="w-full">
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
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span>Community</span>
                  </CardTitle>
                  <CardDescription>Connect with others</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="ghost" className="w-full justify-between" size="sm">
                    <span>Wellness Tips</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between" size="sm">
                    <span>Support Groups</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <AIChatbot
                    trigger={
                      <Button variant="ghost" className="w-full justify-between" size="sm">
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