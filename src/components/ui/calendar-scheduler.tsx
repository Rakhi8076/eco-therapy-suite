import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Calendar as CalendarIcon, Clock, Plus } from 'lucide-react';
import { format } from 'date-fns';

interface Appointment {
  id: number;
  date: Date;
  time: string;
  therapy: string;
  practitioner: string;
  status: 'scheduled' | 'confirmed' | 'completed';
}

export const CalendarScheduler = ({ trigger }: { trigger: React.ReactNode }) => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [selectedTherapy, setSelectedTherapy] = useState<string>();
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      date: new Date(),
      time: '10:00 AM',
      therapy: 'Abhyanga Massage',
      practitioner: 'Dr. Priya Sharma',
      status: 'confirmed'
    },
    {
      id: 2,
      date: new Date(Date.now() + 86400000), // Tomorrow
      time: '2:00 PM',
      therapy: 'Shirodhara',
      practitioner: 'Dr. Raj Patel',
      status: 'scheduled'
    }
  ]);

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const therapyTypes = [
    'Abhyanga Massage',
    'Shirodhara',
    'Panchakarma',
    'Consultation',
    'Herbal Steam Bath',
    'Ayurvedic Facial'
  ];

  const handleScheduleAppointment = () => {
    if (!selectedDate || !selectedTime || !selectedTherapy) return;

    const newAppointment: Appointment = {
      id: appointments.length + 1,
      date: selectedDate,
      time: selectedTime,
      therapy: selectedTherapy,
      practitioner: 'Dr. Available Practitioner',
      status: 'scheduled'
    };

    setAppointments(prev => [...prev, newAppointment]);
    
    // Reset form
    setSelectedDate(undefined);
    setSelectedTime(undefined);
    setSelectedTherapy(undefined);
  };

  const getAppointmentsForDate = (date: Date) => {
    return appointments.filter(apt => 
      apt.date.toDateString() === date.toDateString()
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl" style={{ color: '#AF4F06' }}>
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <CalendarIcon className="h-5 w-5 text-primary" style={{ color: '#AF4F06' }}/>
            <span>Schedule Therapy Session</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Calendar Section */}
          <div className="space-y-4">
            <h3 className="font-medium">Select Date</h3>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className={cn("p-3 pointer-events-auto border rounded-lg")}
              disabled={(date) => date < new Date()}
            />
          </div>

          {/* Booking Form */}
          <div className="space-y-4">
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium">Time Slot</label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableTimes.map((time) => (
                      <SelectItem key={time} value={time}>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{time}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium">Therapy Type</label>
                <Select value={selectedTherapy} onValueChange={setSelectedTherapy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select therapy" />
                  </SelectTrigger>
                  <SelectContent>
                    {therapyTypes.map((therapy) => (
                      <SelectItem key={therapy} value={therapy}>
                        {therapy}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleScheduleAppointment}
                disabled={!selectedDate || !selectedTime || !selectedTherapy}
                className="w-full"
                style={{ background: '#AF4F06' }}
              >
                <Plus className="h-4 w-4 mr-2" />
                Schedule Appointment
              </Button>
            </div>

            {/* Selected Date Appointments */}
            {selectedDate && (
              <div className="space-y-3">
                <h4 className="font-medium">
                  Appointments for {format(selectedDate, 'PPP')}
                </h4>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {getAppointmentsForDate(selectedDate).map((apt) => (
                    <div key={apt.id} className="p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">{apt.therapy}</p>
                          <p className="text-xs text-muted-foreground">
                            {apt.time} • {apt.practitioner}
                          </p>
                        </div>
                        <Badge 
                          variant={
                            apt.status === 'confirmed' ? 'default' :
                            apt.status === 'completed' ? 'secondary' : 'outline'
                          }
                          className="text-xs"
                        >
                          {apt.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                  {getAppointmentsForDate(selectedDate).length === 0 && (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      No appointments scheduled for this date
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};