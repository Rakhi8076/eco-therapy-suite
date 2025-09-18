import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, ChevronUp, ChevronDown, RefreshCw, User } from 'lucide-react';

interface QueueItem {
  id: number;
  patientName: string;
  therapy: string;
  estimatedTime: number;
  priority: 'normal' | 'urgent' | 'high';
  arrivalTime: string;
  status: 'waiting' | 'in-progress' | 'completed';
}

export const QueueManagement = () => {
  const [queue, setQueue] = useState<QueueItem[]>([
    { id: 1, patientName: 'Ravi Kumar', therapy: 'Abhyanga', estimatedTime: 45, priority: 'normal', arrivalTime: '10:00 AM', status: 'in-progress' },
    { id: 2, patientName: 'Priya Singh', therapy: 'Consultation', estimatedTime: 30, priority: 'urgent', arrivalTime: '10:15 AM', status: 'waiting' },
    { id: 3, patientName: 'Amit Sharma', therapy: 'Shirodhara', estimatedTime: 60, priority: 'normal', arrivalTime: '10:30 AM', status: 'waiting' },
    { id: 4, patientName: 'Sunita Devi', therapy: 'Panchakarma', estimatedTime: 90, priority: 'high', arrivalTime: '11:00 AM', status: 'waiting' },
  ]);

  const moveInQueue = (id: number, direction: 'up' | 'down') => {
    setQueue(currentQueue => {
      const index = currentQueue.findIndex(item => item.id === id);
      if (index === -1) return currentQueue;
      
      const newIndex = direction === 'up' ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= currentQueue.length) return currentQueue;
      
      const newQueue = [...currentQueue];
      [newQueue[index], newQueue[newIndex]] = [newQueue[newIndex], newQueue[index]];
      return newQueue;
    });
  };

  const updateStatus = (id: number, newStatus: QueueItem['status']) => {
    setQueue(currentQueue =>
      currentQueue.map(item =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  const optimizeQueue = () => {
    setQueue(currentQueue => {
      // Sort by priority first, then by arrival time
      const priorityOrder = { urgent: 0, high: 1, normal: 2 };
      return [...currentQueue].sort((a, b) => {
        if (a.status === 'in-progress') return -1;
        if (b.status === 'in-progress') return 1;
        if (a.status === 'completed') return 1;
        if (b.status === 'completed') return -1;
        
        const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
        if (priorityDiff !== 0) return priorityDiff;
        
        return a.arrivalTime.localeCompare(b.arrivalTime);
      });
    });
  };

  const totalWaitTime = queue
    .filter(item => item.status === 'waiting')
    .reduce((total, item) => total + item.estimatedTime, 0);

  const averageWaitTime = Math.round(totalWaitTime / queue.filter(item => item.status === 'waiting').length || 0);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'destructive';
      case 'high':
        return 'default';
      default:
        return 'secondary';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-progress':
        return 'default';
      case 'completed':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="space-y-4">
      {/* Queue Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{queue.filter(q => q.status === 'waiting').length}</div>
              <p className="text-sm text-muted-foreground">In Queue</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-success">{averageWaitTime}</div>
              <p className="text-sm text-muted-foreground">Avg Wait (min)</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">{Math.round(totalWaitTime / 60)}</div>
              <p className="text-sm text-muted-foreground">Total Hours</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Queue Actions */}
      <div className="flex justify-between items-center">
        <h3 className="font-medium">Queue Management</h3>
        <Button onClick={optimizeQueue} variant="outline" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Auto-Optimize
        </Button>
      </div>

      {/* Queue List */}
      <div className="space-y-3">
        {queue.map((item, index) => (
          <div key={item.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mb-1">
                  <span className="text-sm font-bold text-primary">#{index + 1}</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => moveInQueue(item.id, 'up')}
                    disabled={index === 0}
                  >
                    <ChevronUp className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => moveInQueue(item.id, 'down')}
                    disabled={index === queue.length - 1}
                  >
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <User className="h-5 w-5 text-primary" />
              </div>
              
              <div>
                <h4 className="font-medium">{item.patientName}</h4>
                <p className="text-sm text-muted-foreground">{item.therapy}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    {item.estimatedTime} min • Arrived: {item.arrivalTime}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="text-right space-y-2">
              <div className="flex space-x-2">
                <Badge variant={getPriorityColor(item.priority)} className="text-xs">
                  {item.priority}
                </Badge>
                <Badge variant={getStatusColor(item.status)} className="text-xs">
                  {item.status}
                </Badge>
              </div>
              
              <Select value={item.status} onValueChange={(value: QueueItem['status']) => updateStatus(item.id, value)}>
                <SelectTrigger className="w-[120px] h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="waiting">Waiting</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};