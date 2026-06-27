import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Priyanka Das",
    exam: "APSC CCE 2023",
    role: "Cleared Prelims",
    content: "The Assam History and Geography sections are unparalleled. The questions were exactly of the standard expected in the actual examination. The analytics helped me focus on my weak areas.",
    rating: 5,
    image: "PD"
  },
  {
    name: "Bikash Sharma",
    exam: "Assam Police SI",
    role: "Selected Candidate",
    content: "I struggled with time management. The timed mock tests and the average time per question metric completely changed my approach. Highly recommended for Police exam aspirants.",
    rating: 5,
    image: "BS"
  },
  {
    name: "Ananya Gogoi",
    exam: "ADRE Grade III",
    role: "Top Ranker",
    content: "The sheer volume of questions and the detailed explanations for the reasoning and math sections were lifesavers. I didn't need any other test series after subscribing here.",
    rating: 5,
    image: "AG"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hear From Our <span className="text-primary">Successful Aspirants</span>
          </h2>
          <p className="text-lg text-slate-400">
            Thousands of students from across Assam have trusted us with their preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-md">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-8 italic text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-white text-lg">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-primary">{testimonial.exam} - {testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
