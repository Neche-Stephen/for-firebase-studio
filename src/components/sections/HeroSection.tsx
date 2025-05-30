import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
            Crafting Digital Experiences That Inspire
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 sm:text-xl font-body">
            We are DesignFlow, a creative web design company dedicated to building beautiful, functional, and user-centric websites that elevate your brand and drive results.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href="#contact">Request a Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary text-primary hover:bg-primary/10">
              <Link href="#portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      {/* Optional: Add a subtle background pattern or image if needed */}
      {/* 
      <Image 
        src="https://placehold.co/1920x1080.png" 
        alt="Abstract background design"
        data-ai-hint="abstract design technology"
        layout="fill"
        objectFit="cover"
        className="opacity-5 -z-10"
        priority
      />
      */}
    </section>
  );
};

export default HeroSection;
