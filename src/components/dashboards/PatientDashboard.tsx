import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { AIChatbot } from '@/components/ui/ai-chatbot';
import { CalendarScheduler } from '@/components/ui/calendar-scheduler';
import { NotificationBell } from '@/components/ui/notification-bell';
import { DietRecommendations } from '@/components/ui/diet-recommendations';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend , CartesianGrid} from "recharts";
import {
  Calendar,
  Clock,
  Play,
  UtensilsCrossed,
  MessageSquare,
  Trophy,
  User,
  ChevronRight,
  Heart,
  Activity,
  Bot
} from 'lucide-react';

const doctorsData = [
  { name: 'Dr. Priya Sharma', specialty: 'Panchakarma Specialist', rating: 4.9, years: 15, status: 'available', img: '/doc1.jpeg' },
  { name: 'Dr. Raj Patel', specialty: 'Ayurvedic Physician', rating: 4.8, years: 12, status: 'available', img: '/doc2.jpeg' },
  { name: 'Dr. Ananya Reddy', specialty: 'Herbal Medicine Expert', rating: 4.7, years: 10, status: 'consultation', img: '/doc3.jpeg', next: '2:30 PM' },
  { name: 'Dr. Vikram Singh', specialty: 'Therapeutic Massage', rating: 4.6, years: 8, status: 'available', img: '/doc4.jpg' },
];

const DoctorsList = ({ doctors, onClose }) => (
  <div
    style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "#0003", zIndex: 9999,
      display: "flex", justifyContent: "center", alignItems: "center"
    }}
  >
    <div style={{ background: "#fff9f3", borderRadius: 14, padding: 24, minWidth: 520, boxShadow: "0 8px 32px #0002" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
        <span style={{ fontWeight: 'bold', fontSize: 20, color: "#924c09" }}>Connect with Doctors</span>
        <Button onClick={onClose} style={{ background: '#eee', color: "#333" }}>Close</Button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        {doctors.map((doc) => (
          <div key={doc.name} style={{ background: "#fff", borderRadius: 12, padding: "18px 12px", boxShadow: "0 2px 10px #0001" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <img src={doc.img} alt={doc.name} style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover", border: "2px solid #dbdbdb" }} />
              <div>
                <div style={{ fontWeight: "bold", fontSize: 16 }}>{doc.name}</div>
                <div style={{ fontSize: 13, color: "#535" }}>{doc.specialty}</div>
              </div>
              <span style={{
                width: 10, height: 10, borderRadius: "50%",
                background: doc.status === 'available' ? "#33cb48" : "#e6be57",
                marginLeft: 8
              }} />
            </div>
            <div style={{ margin: "8px 0 0 0", display: "flex", gap: 8, alignItems: 'center' }}>
              <span style={{ color: "#fc9c41", fontWeight: 500, fontSize: 13 }}>★ {doc.rating}</span>
              <span style={{ color: "#555", fontSize: 13 }}>{doc.years} years</span>
            </div>
            {doc.status === 'available'
              ? <Badge variant="secondary" style={{ background: "#dbf7ed", color: "#34bfa1", margin: "8px 0" }}>Available Now</Badge>
              : <Badge variant="secondary" style={{ background: "#f8f7dd", color: "#e6be57", margin: "8px 0" }}>In Consultation</Badge>}
            {doc.next && <span style={{ fontSize: 13, color: "#888" }}>Next: {doc.next}</span>}
            <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
              <Button variant="outline" style={{ color: "#924c09", borderColor: "#924c09", fontWeight: 500, flex: 1 }}>
                📹 Video
              </Button>
              <Button variant="outline" style={{ color: "#924c09", borderColor: "#924c09", fontWeight: 500, flex: 1 }}>
                📞 Call
              </Button>
              <Button variant="outline" style={{ color: "#924c09", borderColor: "#924c09", fontWeight: 500, flex: 1 }}>
                💬 Chat
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const PatientDashboard = () => {
  const { user, logout } = useAuth();
  const [showDoctorsList, setShowDoctorsList] = useState(false);
  const [openGraph, setOpenGraph] = useState(false);

  // Wellness Breakdown Data
  const wellnessBreakdown = [
    { name: "Sleep", score: 80 },
    { name: "Nutrition", score: 90 },
    { name: "Therapy Sessions", score: 75 },
    { name: "Stress", score: 70 },
  ];

  const upcomingSessions = [
    { id: 1, therapy: 'Abhyanga Massage', time: '10:00 AM', practitioner: 'Dr. Priya Sharma' },
    { id: 2, therapy: 'Shirodhara', time: '2:00 PM', practitioner: 'Dr. Raj Patel' },
  ];

  const todayQueue = [
    { position: 3, estimatedTime: '15 mins', therapy: 'Consultation' }
  ];

  const availableDoctorsCount = doctorsData.filter(d => d.status === 'available').length;
  const inSessionDoctorsCount = doctorsData.length - availableDoctorsCount;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-muted/30 to-accent/20" style={{ backgroundColor: '#FFF9F3' }}>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full shadow-lg overflow-hidden">
                <img src="/logo.png" alt="App Logo" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-xl font-semibold text-foreground" style={{ color: '#AF4F06' }}>AyurSutra</h1>
            </div>
            <div className="flex items-center space-x-4">
              <NotificationBell />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-primary" style={{ color: '#AF4F06' }} />
                </div>
                <span className="text-sm font-medium" style={{ color: '#AF4F06' }}>{user?.name}</span>
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
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* Welcome Section */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground" style={{ color: '#AF4F06' }}>Welcome  {user?.name}!</h2>
          <p className="text-muted-foreground">Continue your wellness journey with personalized Ayurvedic care</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Wellness Score Card */}
          <Card
            onClick={() => setOpenGraph(true)}
            className="bg-gradient-to-br from-success/10 to-success/5 border-success/20 cursor-pointer hover:shadow-lg transition"
          >
            <CardContent className="p-6 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-success">Wellness Score</p>
                <p className="text-2xl font-bold text-success">85%</p>
              </div>
              <Heart className="h-8 w-8 text-success" />
            </CardContent>
          </Card>
          {/* Wellness Breakdown Graph Modal */}
          <Dialog open={openGraph} onOpenChange={setOpenGraph}>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Wellness Breakdown</DialogTitle>
              </DialogHeader>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={wellnessBreakdown} layout="vertical" margin={{ left: 50 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis type="category" dataKey="name" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="score" fill="hsl(var(--success))" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </DialogContent>
          </Dialog>
          <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
            <CardContent className="p-6 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-success">Sessions Completed</p>
                <p className="text-2xl font-bold text-success">12</p>
              </div>
              <Activity className="h-8 w-8 text-success" />
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
            <CardContent className="p-6 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-warning">Streak Days</p>
                <p className="text-2xl font-bold text-warning">7</p>
              </div>
              <Trophy className="h-8 w-8 text-warning" />
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
                  <Calendar className="h-5 w-5 text-primary" style={{ color: '#AF4F06' }} />
                  <span>Today's Schedule</span>
                </CardTitle>
                <CardDescription>Your therapy sessions for today</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-[#AF4F06]"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(175, 79, 6, 0.6)" }}>
                        <Clock className="h-6 w-6 text-primary" style={{ color: '#AF4F06' }} />
                      </div>
                      <div>
                        <h4 className="font-medium">{session.therapy}</h4>
                        <p className="text-sm text-muted-foreground">with {session.practitioner}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{session.time}</p>
                      <Badge
                        variant="outline"
                        className="mt-1 border-[#AF4F06] text-[#AF4F06]"
                      >
                        Confirmed
                      </Badge>
                    </div>
                  </div>
                ))}
                <CalendarScheduler
                  trigger={
                    <Button
                      variant="outline"
                      className="w-full border-[#AF4F06] text-[#AF4F06] hover:bg-[#AF4F06]/30"
                    >
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
                  <Play className="h-5 w-5 text-primary" style={{ color: '#cfdc54ff' }} />
                  <span>Therapy Demo Videos</span>
                </CardTitle>
                <CardDescription>Learn about your upcoming treatments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
                  {[
                    { title: 'Abhyanga Massage', url: 'https://example.com/abhyanga' },
                    { title: 'Shirodhara Therapy', url: 'https://example.com/shirodhara' },
                    { title: 'Panchakarma Process', url: 'https://example.com/panchakarma' },
                    { title: 'Meditation Guide', url: 'https://example.com/meditation' }
                  ].map((video, index) => (
                    <a
                      key={index}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group cursor-pointer block"
                    >
                      <div className="aspect-video rounded-lg flex items-center justify-center mb-2 bg-[#CFDC54]/40 transition-colors">
                        <Play className="h-8 w-8 text-primary" style={{ color: '#cfdc54ff' }} />
                      </div>
                      <h4 className="font-medium text-sm">{video.title}</h4>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Hub */}
            <Card style={{ color: '#AF4F06' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-primary" style={{ color: '#AF4F06' }} />
                  <span>Community</span>
                </CardTitle>
                <CardDescription>Connect with others</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between hover:bg-[#AF4F06]/30"
                >
                  <span>Wellness Tips</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between hover:bg-[#AF4F06]/30"
                >
                  <span>Support Groups</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <AIChatbot
                  trigger={
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-between hover:bg-[#AF4F06]/30"
                    >
                      <span style={{ color: '#cfdc54ff' }}>AI Wellness Assistant</span>
                      <Bot className="h-4 w-4" style={{ color: '#cfdc54ff' }} />
                    </Button>
                  }
                />
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Connect with Doctors Section */}
            <Card>
              <CardHeader>
                <CardTitle style={{ color: "#924c09", display: "flex", alignItems: "center", gap: 8 }}>
                  <User className="h-5 w-5" /> Connect with Doctors
                </CardTitle>
                <CardDescription>Available doctors for consultation</CardDescription>
              </CardHeader>
              <CardContent>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span style={{ color: "#924c09", fontWeight: 600, fontSize: 18 }}>{doctorsData.length} Doctors Online</span>
                  <span style={{
                    display: 'inline-block',
                    width: 10, height: 10, borderRadius: "50%", background: "#33cb48"
                  }} />
                </div>
                <div style={{ marginBottom: 10, color: "#333", fontSize: "0.97em" }}>
                  Video calls, voice messages, and chat available
                </div>
                <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                  <Badge variant="secondary" style={{ background: "#dbf7ed", color: "#34bfa1" }}>{availableDoctorsCount} Available Now</Badge>
                  <Badge variant="secondary" style={{ background: "#f8f7dd", color: "#e6be57" }}>{inSessionDoctorsCount} In Session</Badge>
                </div>
                <Button style={{ background: "#924c09", color: "#fff", width: "100%", marginBottom: 10 }} onClick={() => setShowDoctorsList(true)}>
                  <User style={{ marginRight: 7 }} /> View Available Doctors
                </Button>
                <Button
                  variant="outline"
                  style={{
                    border: "1px solid #ff5a60",
                    color: "#ff5a60",
                    width: "100%",
                    fontWeight: 500,
                    background: "#fff9f7",
                    marginTop: 2
                  }}
                >
                  <span style={{ marginRight: 8 }}>🚨</span> Emergency Consultation
                </Button>
              </CardContent>
            </Card>

            {/* Live Queue */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" style={{ color: '#AF4F06' }} />
                  <span style={{ color: '#AF4F06' }}>Live Queue</span>
                </CardTitle>
                <CardDescription>Your current position</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4" style={{ color: '#AF4F06' }}>
                {todayQueue.map((queue, index) => (
                  <div key={index} className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg" style={{ backgroundColor: "#FFF9F3" }}>
                    <div className="text-3xl font-bold text-primary mb-2" style={{ color: '#AF4F06' }}>#{queue.position}</div>
                    <p className="text-sm text-muted-foreground" style={{ color: '#AF4F06' }}>in queue for {queue.therapy}</p>
                    <p className="text-sm font-medium mt-1">Est. wait: {queue.estimatedTime}</p>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-[#AF4F06] text-[#AF4F06] hover:bg-[#AF4F06]/30"
                >
                  Update Status
                </Button>
              </CardContent>
            </Card>

            {/* Diet Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <UtensilsCrossed className="h-5 w-5 text-primary" style={{ color: '#AF4F06' }} />
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
                  trigger={<Button
                    variant="outline"
                    size="sm"
                    className="w-full border-[#AF4F06] text-[#AF4F06] hover:bg-[#AF4F06]/30"
                  >
                    View Full Plan
                  </Button>
                  }
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Doctors List Modal */}
      {showDoctorsList && <DoctorsList doctors={doctorsData} onClose={() => setShowDoctorsList(false)} />}
    </div>
  );
};
