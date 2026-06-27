import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background px-4 text-center">
      <Image 
        src="/logo.jpg" 
        alt="AssamPrep Logo" 
        width={80} 
        height={80} 
        className="rounded-2xl mb-8 opacity-80"
      />
      <h2 className="text-4xl font-extrabold text-foreground mb-4">404</h2>
      <h3 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h3>
      <p className="text-muted-foreground max-w-md mb-8">
        We couldn't find the page you were looking for. It might have been moved or deleted.
      </p>
      <Button href="/" size="lg" className="px-8 shadow-lg shadow-primary/20">
        Return Home
      </Button>
    </div>
  );
}
