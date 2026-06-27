"use client";

import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';
import { Button } from './Button';

export function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }} 
        className="text-sm hover:text-primary transition-colors text-left"
      >
        Contact Us
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-background border border-border shadow-2xl rounded-2xl p-6 w-full max-w-sm relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex flex-col items-center text-center gap-4 py-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Get in Touch</h3>
                <p className="text-muted-foreground">
                  Write to us at <br/>
                  <a href="mailto:hello@assamprep.com" className="font-semibold text-primary hover:underline mt-1 inline-block">
                    hello@assamprep.com
                  </a>
                </p>
              </div>
              <Button onClick={() => setIsOpen(false)} className="w-full mt-4">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
