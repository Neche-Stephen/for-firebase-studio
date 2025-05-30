import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, Github, Dribbble } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Lead Designer & Founder',
    bio: 'With a passion for minimalist aesthetics and user-centric design, Alex leads our creative vision.',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'professional portrait designer',
    socials: { linkedin: '#', dribbble: '#' }
  },
  {
    id: 2,
    name: 'Maria Rodriguez',
    role: 'Senior Developer',
    bio: 'Maria is a wizard with code, transforming complex designs into seamless digital experiences.',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'professional portrait developer',
    socials: { linkedin: '#', github: '#' }
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'UX Strategist',
    bio: 'David ensures every design decision is backed by research and focused on delivering intuitive user journeys.',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'professional portrait strategist',
    socials: { linkedin: '#' }
  },
  {
    id: 4,
    name: 'Sarah Miller',
    role: 'Project Manager',
    bio: 'Sarah keeps our projects on track and ensures smooth communication between clients and our team.',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'professional portrait manager',
    socials: { linkedin: '#' }
  },
];

const TeamShowcase = () => {
  return (
    <section id="team" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-headline text-primary">
            Meet Our Creative Team
          </h2>
          <p className="mt-4 text-lg text-foreground/70 font-body max-w-2xl mx-auto">
            The talented individuals behind DesignFlow, dedicated to bringing your vision to life with expertise and passion.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center pt-8">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 ring-2 ring-primary/50 ring-offset-2 ring-offset-background">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    data-ai-hint={member.dataAiHint}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 font-body text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.socials.github && (
                    <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                   {member.socials.dribbble && (
                    <a href={member.socials.dribbble} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Dribbble className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
