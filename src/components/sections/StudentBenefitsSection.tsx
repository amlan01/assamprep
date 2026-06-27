import React from 'react';
import { ShieldCheck, TrendingDown, Target, Zap, Activity, Award, MapPin, Trophy } from 'lucide-react';

const benefits = [
  { title: 'Increase Accuracy', icon: Target, desc: 'Learn to avoid common traps and answer with confidence.' },
  { title: 'Reduce Negative Marks', icon: TrendingDown, desc: 'Master the art of skipping doubtful questions intelligently.' },
  { title: 'Identify Weak Areas', icon: ShieldCheck, desc: 'Pinpoint exactly which topics are dragging your score down.' },
  { title: 'Improve Speed', icon: Zap, desc: 'Practice under timed conditions to enhance your calculation speed.' },
  { title: 'Track Progress', icon: Activity, desc: 'Visualize your growth curve with day-by-day analytics.' },
  { title: 'Exam Readiness', icon: Award, desc: 'Get comfortable with the UI and pressure of computer-based tests.' },
  { title: 'State-Specific Prep', icon: MapPin, desc: 'Access exclusive materials focused heavily on Assam-centric topics.' },
  { title: 'Competitive Ranking', icon: Trophy, desc: 'Know exactly where you stand against other aspirants in Assam.' },
];

export function StudentBenefitsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transform Your <span className="text-primary">Preparation Strategy</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our platform is designed not just to test you, but to fundamentally improve how you approach competitive exams.
            </p>
            <div className="hidden lg:block w-full h-64 bg-slate-100 dark:bg-slate-800 rounded-xl bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-80 border border-slate-200 dark:border-slate-700 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
               <div className="absolute bottom-4 left-4 right-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur p-4 rounded-lg">
                 <p className="font-bold text-lg">"The best investment for my APSC prep."</p>
                 <p className="text-sm text-muted-foreground">- Rahul B., APSC Rank 14</p>
               </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-1">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
