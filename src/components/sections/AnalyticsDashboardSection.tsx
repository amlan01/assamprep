import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { LineChart, Activity, Target, Clock, AlertTriangle } from 'lucide-react';

export function AnalyticsDashboardSection() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Data-Driven <span className="text-primary">Preparation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Stop guessing. Our advanced analytics engine breaks down your performance, showing exactly where you excel and where you need work.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Dashboard Mockup Container */}
          <div className="glass-card rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden bg-slate-50 dark:bg-slate-900">
            {/* Top Bar */}
            <div className="h-12 border-b border-slate-200 dark:border-slate-800 flex items-center px-6 justify-between bg-white dark:bg-slate-950">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-sm font-medium text-slate-500">Performance Overview - APSC CCE Prelims</div>
              <div className="w-8 h-8 rounded-full bg-primary/20"></div>
            </div>
            
            {/* Dashboard Content */}
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Left Column (Metrics) */}
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center gap-4">
                  <div className="p-3 bg-success/10 text-success rounded-lg"><Target className="w-6 h-6" /></div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Accuracy Rate</p>
                    <p className="text-2xl font-bold">87.5%</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center gap-4">
                  <div className="p-3 bg-accent/10 text-accent rounded-lg"><Clock className="w-6 h-6" /></div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Avg. Time/Question</p>
                    <p className="text-2xl font-bold">42s</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg"><Activity className="w-6 h-6" /></div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Percentile</p>
                    <p className="text-2xl font-bold">94.2</p>
                  </div>
                </div>
              </div>

              {/* Middle Column (Chart Placeholder & Weaknesses) */}
              <div className="md:col-span-2 space-y-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm h-48 flex flex-col justify-between relative overflow-hidden">
                   <div className="flex justify-between items-start mb-4">
                     <p className="font-semibold text-foreground">Score Progression</p>
                     <Badge variant="outline" className="text-success border-success/30 bg-success/5">+12% this week</Badge>
                   </div>
                   {/* Abstract Chart */}
                   <div className="w-full flex-1 flex items-end justify-between gap-2 px-2">
                     {[40, 45, 55, 52, 65, 75, 72, 85].map((h, i) => (
                       <div key={i} className="w-full bg-primary/20 rounded-t-sm relative group">
                          <div className="absolute bottom-0 w-full bg-primary rounded-t-sm transition-all duration-500 ease-out" style={{ height: `${h}%` }}></div>
                       </div>
                     ))}
                   </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div className="bg-red-50 dark:bg-red-900/10 p-5 rounded-xl border border-red-100 dark:border-red-900/30">
                     <div className="flex items-center gap-2 mb-3">
                       <AlertTriangle className="w-5 h-5 text-red-500" />
                       <h4 className="font-semibold text-red-700 dark:text-red-400">Weak Subjects</h4>
                     </div>
                     <ul className="space-y-2 text-sm text-red-600/80 dark:text-red-400/80">
                       <li className="flex justify-between"><span>Assam History</span> <span>45%</span></li>
                       <li className="flex justify-between"><span>Indian Economy</span> <span>52%</span></li>
                     </ul>
                   </div>
                   
                   <div className="bg-green-50 dark:bg-green-900/10 p-5 rounded-xl border border-green-100 dark:border-green-900/30">
                     <div className="flex items-center gap-2 mb-3">
                       <Target className="w-5 h-5 text-green-600" />
                       <h4 className="font-semibold text-green-700 dark:text-green-400">Strong Subjects</h4>
                     </div>
                     <ul className="space-y-2 text-sm text-green-600/80 dark:text-green-400/80">
                       <li className="flex justify-between"><span>Reasoning</span> <span>92%</span></li>
                       <li className="flex justify-between"><span>Indian Polity</span> <span>88%</span></li>
                     </ul>
                   </div>
                </div>
              </div>

            </div>
          </div>
          
          {/* Decorative floating elements */}
          <div className="absolute -right-8 top-1/3 hidden lg:block p-4 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 animate-pulse">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold">#1</div>
               <div>
                 <p className="text-xs text-muted-foreground">State Rank</p>
                 <p className="font-bold text-foreground">Top 1%</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
