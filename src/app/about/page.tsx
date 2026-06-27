import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Target, Heart, Lightbulb, Users, CheckCircle2 } from 'lucide-react';
import { CTABannerSection } from '@/components/sections/CTABannerSection';

export const metadata = {
  title: 'About Us | AssamPrep',
  description: 'Learn about our mission to empower Assam Government Exam Aspirants with the best mock tests and analytics.',
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-24 bg-background">
        {/* Header Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
              Empowering Assam's <span className="text-primary">Aspirants</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We started AssamPrep with a single vision: to democratize high-quality, state-specific exam preparation for every student in Assam, regardless of their location.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-foreground">The Gap We Saw</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Every year, lakhs of aspirants in Assam prepare for prestigious exams like APSC CCE, ADRE, and Assam Police. However, we noticed a critical missing piece: a lack of high-quality, standardized mock tests that strictly followed the state syllabus and provided meaningful performance insights.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Aspirants were studying hard, but testing blind. AssamPrep was built to fix this. We combined expert-curated questions, specifically focused on Assam's rich history, geography, and current affairs, with a cutting-edge analytics engine.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="glass-card rounded-2xl p-8 bg-primary/5 border border-primary/10">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6 text-primary" />
                    Our Mission
                  </h3>
                  <p className="text-foreground leading-relaxed mb-6">
                    To provide every government job aspirant in Assam with the tools, insights, and confidence needed to succeed on exam day.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-success" /> Assam-Centric Content
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-success" /> Technology-Driven Preparation
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-success" /> Affordable Excellence
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="text-muted-foreground">The principles that guide everything we build.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Student-First</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Every feature we develop and every question we curate is designed with the student's success as the absolute priority.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center mb-6">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Data-Driven</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We believe in the power of analytics. We show you exactly where you stand, taking the guesswork out of preparation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-6">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Expert Led</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our content is strictly crafted and vetted by top rankers, subject matter experts, and seasoned educators of Assam.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Reusing CTA Banner */}
        <CTABannerSection />
      </div>
    </>
  );
}
