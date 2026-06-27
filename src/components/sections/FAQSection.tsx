import React from 'react';
import { Accordion } from '@/components/ui/Accordion';

const faqItems = [
  {
    question: 'Which exams are supported on AssamPrep?',
    answer: 'We currently support APSC CCE only, while we are continuously adding support for other exams like Assam Direct Recruitment (ADRE), Assam Police (SI & Constable), Assam TET, and various departmental exams like Secretariat and Forest.'
  },
  {
    question: 'Can I practice subject-wise?',
    answer: 'Yes, we have dedicated sections for every subject, including specialized topics like Assam History, Assam Geography, and Art & Culture, complete with chapter-wise and topic-wise tests.'
  },
  {
    question: 'Are previous year questions included?',
    answer: 'Absolutely. We are currently integrating previous year papers for all major exams so you can understand the exact pattern and difficulty level.'
  },
  {
    question: 'Can I take unlimited mock tests?',
    answer: 'All users get access to unlimited full-length mock tests and topic tests, along with our AI-driven performance analytics dashboard.'
  },
  {
    question: 'Do I receive explanations for incorrect answers?',
    answer: 'Yes, every question comes with a detailed explanation.'
  },
  {
    question: 'Is the platform mobile friendly?',
    answer: 'Yes, AssamPrep is fully responsive. You can seamlessly take tests, review notes, and check your analytics on your smartphone or tablet.'
  },
  {
    question: 'Can I compare my performance with others?',
    answer: 'Yes! Our platform features a live leaderboard and percentile ranking system that compares your score with thousands of other aspirants across Assam.'
  }
];

export function FAQSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Have doubts? Here are answers to the most common questions from aspirants.
          </p>
        </div>

        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
