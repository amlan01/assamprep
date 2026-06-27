import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Target, BarChart3, Clock, BookOpen, Brain, Trophy, Smartphone, Zap } from 'lucide-react';

const features = [
  {
    title: 'Exam-Specific Mock Tests',
    description: 'Tailored tests for APSC, ADRE, Assam Police, strictly following the latest syllabus.',
    icon: Target,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    title: 'Real Exam Simulation',
    description: 'Experience the exact interface and time pressure of the actual examination.',
    icon: Clock,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10'
  },
  {
    title: 'State-Specific Content',
    description: 'Deep dive into Assam History, Geography, and Culture with dedicated question banks.',
    icon: BookOpen,
    color: 'text-green-500',
    bg: 'bg-green-500/10'
  },
  {
    title: 'AI Weakness Analysis',
    description: 'Our system identifies your weak topics and recommends targeted practice.',
    icon: Brain,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10'
  },
  {
    title: 'Performance Analytics',
    description: 'Track your accuracy, speed, and topic-wise mastery over time with detailed graphs.',
    icon: BarChart3,
    color: 'text-pink-500',
    bg: 'bg-pink-500/10'
  },
  {
    title: 'Instant Ranking',
    description: 'Compare your scores with thousands of aspirants across Assam on a live leaderboard.',
    icon: Trophy,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10'
  },
  {
    title: 'Mobile Friendly',
    description: 'Practice on the go. Seamlessly sync your progress across mobile and desktop devices.',
    icon: Smartphone,
    color: 'text-teal-500',
    bg: 'bg-teal-500/10'
  },
  {
    title: 'Detailed Solutions',
    description: 'Get step-by-step explanations and shortcut tricks for every question.',
    icon: Zap,
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10'
  }
];

export function WhyChooseUsSection() {
  return (
    <section id="features" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">AssamPrep?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide everything you need to clear Assam Government exams, combining high-quality content with smart analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.bg}`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
