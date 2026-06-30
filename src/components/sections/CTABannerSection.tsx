import React from 'react';
import { Button } from '@/components/ui/Button';
import { Rocket } from 'lucide-react';

export function CTABannerSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
         {/* Decorative gradients */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Begin Your Preparation?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of Assam aspirants preparing smarter every day. Start with a free mock test and experience the difference.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="https://apsc.assamprep.com/tests" size="lg" className="bg-white text-primary hover:bg-slate-100 text-lg px-8 shadow-xl shadow-black/20 w-full sm:w-auto">
              Start Free Mock Test
            </Button>
            {/* <Button href="/#" size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 gap-2 w-full sm:w-auto">
              <Rocket className="w-5 h-5" />
              View Subscription Plans
            </Button> */}
          </div>
          <p className="text-white/70 mt-6 text-sm">No payment required for the free tests.</p>
        </div>
      </div>
    </section>
  );
}
