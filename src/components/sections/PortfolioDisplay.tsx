import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Artisan Coffee Roasters',
    description: 'A sleek e-commerce platform for a specialty coffee brand, focusing on user experience and product storytelling.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'coffee shop website',
    tags: ['E-commerce', 'Branding', 'UX Design'],
    liveLink: '#',
    testimonial: '"DesignFlow brought our vision to life! The new website has significantly boosted our online sales."',
    client: 'CEO, Artisan Coffee Roasters'
  },
  {
    id: 2,
    title: 'Tech Startup Landing Page',
    description: 'A modern and engaging landing page for a SaaS startup, designed to convert visitors into leads.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'tech startup website',
    tags: ['Web Design', 'Lead Generation', 'UI/UX'],
    liveLink: '#',
    testimonial: '"The team at DesignFlow is incredibly talented. They understood our needs perfectly and delivered beyond our expectations."',
    client: 'Founder, TechNova Solutions'
  },
  {
    id: 3,
    title: 'Non-Profit Organization Site',
    description: 'An accessible and informative website for a community-focused non-profit, enhancing their online presence and reach.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'nonprofit organization website',
    tags: ['Accessibility', 'Community', 'Web Development'],
    liveLink: '#',
    testimonial: '"Working with DesignFlow was a pleasure. They created a beautiful and functional site that helps us connect with our community."',
    client: 'Director, Community Pillars'
  },
];

const PortfolioDisplay = () => {
  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-headline text-primary">
            Our Recent Work
          </h2>
          <p className="mt-4 text-lg text-foreground/70 font-body max-w-2xl mx-auto">
            We take pride in delivering stunning and effective web solutions. Explore some of our favorite projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-60">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  data-ai-hint={item.dataAiHint}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-body">{tag}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80 font-body text-sm mb-4">{item.description}</p>
                {item.testimonial && (
                   <blockquote className="mt-2 border-l-2 border-primary pl-3 italic text-sm text-muted-foreground">
                    <p>{item.testimonial}</p>
                    <cite className="block mt-1 not-italic font-semibold text-foreground/70">- {item.client}</cite>
                  </blockquote>
                )}
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-primary p-0 hover:underline">
                  <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioDisplay;
