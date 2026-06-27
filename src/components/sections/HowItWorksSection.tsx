import React from 'react';
import { UserPlus, Search, FileSignature, Play, BarChart, ArrowUpRight } from 'lucide-react';

const steps = [
  {
    title: 'Register',
    description: 'Create your free account in seconds.',
    icon: UserPlus,
  },
  {
    title: 'Choose Examination',
    description: 'Select your target Assam Govt exam.',
    icon: Search,
  },
  {
    title: 'Select Subject',
    description: 'Pick a full test or a subject-specific quiz.',
    icon: FileSignature,
  },
  {
    title: 'Take Mock Test',
    description: 'Experience the real exam environment.',
    icon: Play,
  },
  {
    title: 'View Analytics',
    description: 'Get deep insights into your performance.',
    icon: BarChart,
  },
  {
    title: 'Improve Score',
    description: 'Work on weak areas and climb the ranks.',
    icon: ArrowUpRight,
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, streamlined process to take your preparation to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Connecting lines for desktop */}
          <div className="hidden lg:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-200 dark:bg-slate-700 z-0"></div>
          <div className="hidden lg:block absolute top-[16.5rem] left-1/6 right-1/6 h-0.5 bg-slate-200 dark:bg-slate-700 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary transition-all duration-300">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Step {index + 1}: {step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
