'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center mb-6">
        <AlertCircle className="w-8 h-8" />
      </div>
      <h2 className="text-3xl font-extrabold text-foreground mb-4">Something went wrong!</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        We apologize for the inconvenience. An unexpected error has occurred. Please try again.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()} size="lg" className="px-8 shadow-lg shadow-primary/20">
          Try Again
        </Button>
        <Button href="/" variant="outline" size="lg" className="px-8">
          Go Home
        </Button>
      </div>
    </div>
  );
}
