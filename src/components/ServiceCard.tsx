
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  jobs: string;
  delay: number;
}

const ServiceCard = ({ icon: Icon, title, description, color, jobs, delay }: ServiceCardProps) => {
  return (
    <Card 
      className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-6 text-center space-y-4">
        <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
          <p className="text-xs font-medium text-primary">
            {jobs}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
