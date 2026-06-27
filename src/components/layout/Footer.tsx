import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ContactPopup } from '@/components/ui/ContactPopup';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.jpg" alt="AssamPrep Logo" width={40} height={40} className="rounded-lg object-contain" />
              <span className="text-xl font-bold tracking-tight text-white">
                Assam<span className="text-primary">Prep</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              The most comprehensive mock test platform for Assam Government examinations. Prepare smarter, achieve your goals.
            </p>
            <div className="flex space-x-4 pt-2 text-sm">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">Facebook</Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">YouTube</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/exams" className="text-sm hover:text-primary transition-colors">Mock Tests</Link></li>
              {/* <li><Link href="#" className="text-sm hover:text-primary transition-colors">Current Affairs</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">Blog</Link></li> */}
              <li><Link href="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><ContactPopup /></li>
            </ul>
          </div>

          {/* Exams */}
          <div>
            <h3 className="text-white font-semibold mb-4">Top Exams</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">APSC CCE</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">ADRE</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">Assam Police</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">Assam TET</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary transition-colors">Assam Secretariat</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-primary transition-colors">Terms of Service</Link></li>
              {/* <li><Link href="#" className="text-sm hover:text-primary transition-colors">Refund Policy</Link></li> */}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} AssamPrep. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 mt-4 md:mt-0">
            Designed for Aspirants in Assam.
          </p>
        </div>
      </div>
    </footer>
  );
}
