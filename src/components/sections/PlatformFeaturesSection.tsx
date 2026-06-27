import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { CheckCircle2 } from 'lucide-react';

const featuresList = [
  "Unlimited Practice",
  "Timed Mock Tests",
  "Custom Tests",
  "Previous Year Papers",
  "Bookmarks",
  "Personal Dashboard",
  "Accuracy Tracking",
  "Rank Prediction",
  "Topic Mastery",
  "Daily Quiz",
  "Current Affairs Capsules",
  "PDF Notes",
  "Instant Solutions",
  "Detailed Explanations",
  "Performance Graphs",
  "Question Discussions"
];

export function PlatformFeaturesSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Everything You Need to Succeed.
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              We've built a platform that not only tests your knowledge but actively helps you improve it. Experience a feature-rich environment designed for serious aspirants.
            </p>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {featuresList.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  <span className="text-sm font-medium text-white leading-tight pt-0.5">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
