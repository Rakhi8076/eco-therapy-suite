import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, User, Calendar, Clock } from 'lucide-react';

interface Patient {
  id: number;
  name: string;
  age: number;
  condition: string;
  lastVisit: string;
  nextAppointment: string;
  status: 'active' | 'inactive' | 'pending';
}

export const PatientSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [conditionFilter, setConditionFilter] = useState('all');

  const allPatients: Patient[] = [
    { id: 1, name: 'Ravi Kumar', age: 45, condition: 'Diabetes', lastVisit: '2024-01-15', nextAppointment: '2024-01-22', status: 'active' },
    { id: 2, name: 'Priya Singh', age: 32, condition: 'Stress Management', lastVisit: '2024-01-14', nextAppointment: '2024-01-21', status: 'active' },
    { id: 3, name: 'Amit Sharma', age: 38, condition: 'Arthritis', lastVisit: '2024-01-10', nextAppointment: '2024-01-25', status: 'pending' },
    { id: 4, name: 'Sunita Devi', age: 52, condition: 'Hypertension', lastVisit: '2023-12-20', nextAppointment: 'Not scheduled', status: 'inactive' },
    { id: 5, name: 'Raj Patel', age: 29, condition: 'Digestive Issues', lastVisit: '2024-01-16', nextAppointment: '2024-01-23', status: 'active' },
  ];

  const filteredPatients = allPatients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.condition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || patient.status === statusFilter;
    const matchesCondition = conditionFilter === 'all' || patient.condition === conditionFilter;
    
    return matchesSearch && matchesStatus && matchesCondition;
  });

  const conditions = [...new Set(allPatients.map(p => p.condition))];

  return (
    <div className="space-y-4">
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search patients by name or condition..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>

        <Select value={conditionFilter} onValueChange={setConditionFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Condition" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Conditions</SelectItem>
            {conditions.map(condition => (
              <SelectItem key={condition} value={condition}>{condition}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filteredPatients.length} of {allPatients.length} patients
        </p>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Export List
        </Button>
      </div>

      {/* Patient List */}
      <div className="space-y-3">
        {filteredPatients.map((patient) => (
          <div key={patient.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">{patient.name}</h4>
                <p className="text-sm text-muted-foreground">Age {patient.age} • {patient.condition}</p>
                <div className="flex items-center space-x-4 mt-1">
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>Last visit: {patient.lastVisit}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>Next: {patient.nextAppointment}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right space-y-2">
              <Badge 
                variant={
                  patient.status === 'active' ? 'default' :
                  patient.status === 'pending' ? 'secondary' : 'outline'
                }
                className="text-xs"
              >
                {patient.status}
              </Badge>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">View</Button>
                <Button size="sm">Edit</Button>
              </div>
            </div>
          </div>
        ))}
        
        {filteredPatients.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <User className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No patients found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};