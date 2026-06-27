import React from 'react';
import {CTABannerSection} from '@/components/sections/CTABannerSection';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ChevronRight, FileText, LayoutList, Calendar } from 'lucide-react';

const exams = [
  {
    name: 'APSC CCE',
    level: 'Easy / Moderate / Difficult',
    tests: '10+ Full Tests',
    pyq: 'Mixed',
    pattern: 'Prelims (New Pattern)',
    isPopular: true,
    isAvailable: true
  },
  {
    name: 'Assam Direct Recruitment (ADRE)',
    level: 'Easy / Moderate',
    tests: '0 Tests',
    pyq: 'Available',
    pattern: 'Grade III & Grade IV',
    isPopular: false,
    isAvailable: false
  },
  {
    name: 'Assam Police',
    level: 'Easy / Moderate',
    tests: '0 Tests',
    pyq: 'Available',
    pattern: 'SI, Constable & Commando',
    isPopular: false,
    isAvailable: false
  },
  {
    name: 'Assam TET',
    level: 'Easy / Moderate',
    tests: '0 Tests',
    pyq: 'Available',
    pattern: 'LP & UP Sections',
    isPopular: false,
    isAvailable: false
  },
  {
    name: 'Assam Secretariat',
    level: 'Easy / Moderate',
    tests: '0 Tests',
    pyq: 'Available',
    pattern: 'Computer Operator & Assistant',
    isPopular: false,
    isAvailable: false
  },
  {
    name: 'Assam Judiciary',
    level: 'Easy / Moderate',
    tests: '0 Tests',
    pyq: 'Available',
    pattern: 'Grade III',
    isPopular: false,
    isAvailable: false
  }
];

export function ExamsCoveredSection() {
  return (
    <section id="exams" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Coverage for <br /> All Major <span className="text-primary">State Exams</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Select your target exam and access hundreds of carefully curated mock tests, previous year papers, and study notes.
            </p>
          </div>
          <Button href="/exams" variant="outline" className="shrink-0 gap-2">
            View All Exams <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exams.map((exam, index) => (
            <Card key={index} className="group hover:border-primary/50 transition-colors duration-300 relative overflow-hidden">
              {/* {exam.isPopular && (
                <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                  POPULAR
                </div>
              )} */}
              {exam.isAvailable ? (
                <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                  AVAILABLE
                </div>
              ) : <div className="absolute top-0 right-0 bg-gray-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                  COMING SOON
                </div>}
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="bg-slate-100 dark:bg-slate-800 border-none">
                    {exam.level}
                  </Badge>
                </div>
                <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">{exam.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{exam.pattern}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <LayoutList className="w-4 h-4 text-primary" />
                  <span>{exam.tests} Available</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <FileText className="w-4 h-4 text-primary" />
                  <span>PYQ: {exam.pyq}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button href="/" className="w-full group-hover:bg-primary-hover transition-colors">
                  Explore Test Series
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      {/* Reusing CTA Banner */}
      <CTABannerSection />
    </section>
  );
}
