import React from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { CheckCircle, PlayCircle, BookMarked, Globe, Landmark, TrendingUp, Cpu, Leaf, BrainCircuit, Calculator, Languages, History, Map, Users } from 'lucide-react';

const subjects = [
  { name: 'Assam History', icon: History, tests: '10 Topic Tests' },
  { name: 'Assam Geography', icon: Map, tests: '7 Topic Tests' },
  { name: 'Art & Culture', icon: Users, tests: '4 Topic Tests' },
  { name: 'Indian Polity', icon: Landmark, tests: '6 Topic Tests' },
  { name: 'History', icon: BookMarked, tests: '20 Topic Tests' },
  { name: 'Geography', icon: Globe, tests: '3 Topic Tests' },
  { name: 'Economy', icon: TrendingUp, tests: '8 Topic Tests' },
  { name: 'Science', icon: Cpu, tests: '5 Topic Tests' },
  { name: 'Environment', icon: Leaf, tests: '7 Topic Tests' },
  { name: 'Reasoning', icon: BrainCircuit, tests: 'coming soon' },
  { name: 'Mathematics', icon: Calculator, tests: 'coming soon' },
  { name: 'English', icon: Languages, tests: 'coming soon' },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-10 pb-16 lg:pt-10 lg:pb-24">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              <Badge variant="default" className="px-2 py-0.5">New</Badge>
              <span>APSC CCE 2026 Mock Tests Available</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              Master Your <span className="text-primary relative whitespace-nowrap">
                Assam Govt Exams
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                </svg>
              </span> <br />
              With Confidence.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              The most comprehensive mock test platform designed specifically for aspirants of APSC, ADRE, Assam Police and other state recruitment exams.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button href="https://apsc.assamprep.com/tests" size="lg" className="w-full sm:w-auto text-lg px-8 shadow-lg shadow-primary/30">
                Start Free Mock Test
              </Button>
              <Button href="/exams" size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 gap-2 group">
                <PlayCircle className="w-5 h-5 group-hover:text-primary transition-colors" />
                Explore Exams
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 pt-6 text-sm font-medium text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Hundreds of Practice Questions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Assam Specific Content</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Latest Exam Pattern</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Instant Results</span>
              </div>
            </div>
          </div>

          {/* Subjects Grid (Replacing Hero Illustration) */}
          <div className="w-full lg:w-1/2 relative lg:pl-10" id="subjects">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 relative z-10">
              {/* Subtle glow behind the grid */}
              <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 rounded-full"></div>
              
              {subjects.map((subject, index) => (
                <Card key={index} className="hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer group bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60">
                  <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <subject.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-[13px] md:text-sm leading-tight mb-0.5">{subject.name}</h3>
                      <p className="text-[10px] text-muted-foreground">{subject.tests}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
