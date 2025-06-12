
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Wrench, 
  Paintbrush, 
  Droplets, 
  Zap, 
  Hammer, 
  TreePine,
  AirVent,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

const serviceCategories = [
  {
    icon: Droplets,
    title: 'Plumbing',
    description: 'Leaks, installations, repairs',
    color: 'bg-blue-500',
    jobs: '1,200+ jobs'
  },
  {
    icon: Zap,
    title: 'Electrical',
    description: 'Wiring, fixtures, outlets',
    color: 'bg-yellow-500',
    jobs: '850+ jobs'
  },
  {
    icon: Paintbrush,
    title: 'Painting',
    description: 'Interior, exterior, touch-ups',
    color: 'bg-purple-500',
    jobs: '2,100+ jobs'
  },
  {
    icon: Hammer,
    title: 'Carpentry',
    description: 'Furniture, repairs, installations',
    color: 'bg-orange-500',
    jobs: '980+ jobs'
  },
  {
    icon: AirVent,
    title: 'HVAC',
    description: 'Heating, cooling, ventilation',
    color: 'bg-cyan-500',
    jobs: '650+ jobs'
  },
  {
    icon: TreePine,
    title: 'Landscaping',
    description: 'Gardening, lawn care, design',
    color: 'bg-green-500',
    jobs: '1,500+ jobs'
  },
  {
    icon: Lightbulb,
    title: 'Handyman',
    description: 'General repairs, maintenance',
    color: 'bg-indigo-500',
    jobs: '3,200+ jobs'
  },
  {
    icon: Wrench,
    title: 'Appliance Repair',
    description: 'Washing machines, fridges, ovens',
    color: 'bg-red-500',
    jobs: '720+ jobs'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Popular <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From emergency repairs to planned improvements, our verified workers handle 
            all types of home and workplace services with professional expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {serviceCategories.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <p className="text-xs font-medium text-primary">
                    {service.jobs}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
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
      </div>
    </section>
  );
};

export default Services;
