'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AIConceptSchema, type AIConceptValues } from '@/lib/types';
import { handleGenerateConcept } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Wand2, Lightbulb } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const AIConceptGenerator = () => {
  const [generatedConcepts, setGeneratedConcepts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<AIConceptValues>({
    resolver: zodResolver(AIConceptSchema),
    defaultValues: {
      targetCustomer: '',
      desiredStyle: '',
      keyFeatures: '',
    },
  });

  async function onSubmit(values: AIConceptValues) {
    setIsLoading(true);
    setError(null);
    setGeneratedConcepts([]);

    const result = await handleGenerateConcept(values);
    
    setIsLoading(false);

    if ('error' in result) {
      setError(result.error);
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: result.error,
      });
    } else if (result.concepts && result.concepts.length > 0) {
      setGeneratedConcepts(result.concepts);
      toast({
        title: "Concepts Generated!",
        description: "Your website concepts are ready.",
      });
    } else {
      setError("No concepts were generated. Please try refining your input.");
      toast({
        variant: "destructive",
        title: "No Concepts",
        description: "No concepts were generated. Please try refining your input.",
      });
    }
  }

  return (
    <section id="ai-concept-generator" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-headline text-primary inline-flex items-center">
            <Wand2 className="mr-3 h-10 w-10" /> AI Website Concept Generator
          </h2>
          <p className="mt-4 text-lg text-foreground/70 font-body max-w-2xl mx-auto">
            Need some inspiration? Describe your ideal website, and our AI will generate potential concepts and messaging angles.
          </p>
          <Alert variant="default" className="mt-6 max-w-xl mx-auto text-left bg-accent/20 border-accent/50">
            <Lightbulb className="h-5 w-5 text-accent" />
            <AlertTitle className="font-headline text-accent">For Inspiration Only</AlertTitle>
            <AlertDescription className="text-accent/80">
              These AI-generated concepts are intended as a starting point for brainstorming and refining your website's content and message. They are not complete or publishable copy.
            </AlertDescription>
          </Alert>
        </div>

        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline">Describe Your Vision</CardTitle>
            <CardDescription>Fill in the details below to get started.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="targetCustomer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Customer</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g., Young professionals interested in sustainable fashion" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="desiredStyle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Desired Style</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g., Minimalist, modern, with a touch of elegance" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="keyFeatures"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Key Features</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g., Online store, blog, appointment booking" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    'Generate Concepts'
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {error && (
          <Alert variant="destructive" className="mt-8 max-w-2xl mx-auto">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {generatedConcepts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-6 font-headline">Generated Concepts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {generatedConcepts.map((concept, index) => (
                <Card key={index} className="shadow-lg bg-secondary/30">
                  <CardHeader>
                    <CardTitle className="font-headline text-lg text-primary">Concept {index + 1}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 font-body">{concept}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIConceptGenerator;
