import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full glass border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.jpg" alt="AssamPrep Logo" width={40} height={40} className="rounded-lg object-contain" />
              <span className="text-xl font-bold tracking-tight text-foreground">
                Assam<span className="text-primary">Prep</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8">
              <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/exams" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Exams
              </Link>
              <Link href="/features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Features
              </Link>
              {/* <Link href="/#testimonials" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Testimonials
              </Link> */}
            </div>

            <div className="flex items-center gap-4">
              {/* <Button href="/#" variant="ghost" className="hidden lg:flex text-sm font-medium">Log in</Button> */}
              <Button href="https://apsc.assamprep.com/tests" className="bg-primary text-white hover:bg-primary-hover shadow-md shadow-primary/20">
                Start Free Mock Test
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
