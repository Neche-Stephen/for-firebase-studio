import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Palette, Code, Rocket, Users2, Milestone } from 'lucide-react';

const processSteps = [
  {
    id: 1,
    title: 'Discovery & Strategy',
    description: "We start by understanding your business, goals, and target audience. This phase involves in-depth discussions and research to lay a solid foundation for your project. Client involvement is key to define scope and objectives.",
    icon: <Search className="h-10 w-10 text-primary" />,
  },
  {
    id: 2,
    title: 'Design & Prototyping',
    description: "Our creative team crafts visually appealing and user-friendly designs. We create wireframes and interactive prototypes, allowing you to visualize the user experience and provide feedback before development begins.",
    icon: <Palette className="h-10 w-10 text-primary" />,
  },
  {
    id: 3,
    title: 'Development & Testing',
    description: "Skilled developers bring the approved designs to life using modern technologies. We ensure your website is responsive, fast, and secure. Rigorous testing across devices and browsers guarantees a flawless launch.",
    icon: <Code className="h-10 w-10 text-primary" />,
  },
  {
    id: 4,
    title: 'Launch & Support',
    description: "After final approvals, we deploy your website. But our partnership doesn't end there. We offer ongoing support and maintenance to ensure your site remains up-to-date and performs optimally.",
    icon: <Rocket className="h-10 w-10 text-primary" />,
  },
];

const ProcessOverview = () => {
  return (
    <section id="process" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-headline text-primary">
            Our Design Process
          </h2>
          <p className="mt-4 text-lg text-foreground/70 font-body max-w-2xl mx-auto">
            We follow a structured and collaborative process to ensure your project's success, keeping you involved every step of the way.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <Card key={step.id} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  {step.icon}
                </div>
                <CardTitle className="font-headline text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 font-body text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
