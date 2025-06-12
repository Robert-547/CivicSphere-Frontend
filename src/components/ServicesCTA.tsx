
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ServicesCTA = () => {
  return (
    <div className="text-center space-y-6">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Don't see your service?</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our network of skilled professionals covers hundreds of home and workplace services. 
          Post your job and get matched with the right expert.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="gradient-primary text-white">
          Post a Job
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
        <Button size="lg" variant="outline">
          Browse All Services
        </Button>
      </div>
    </div>
  );
};

export default ServicesCTA;
