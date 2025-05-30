// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview Generates website concept descriptions based on user input.
 *
 * - generateWebsiteConcept - A function that handles the website concept generation process.
 * - GenerateWebsiteConceptInput - The input type for the generateWebsiteConcept function.
 * - GenerateWebsiteConceptOutput - The return type for the generateWebsiteConcept function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWebsiteConceptInputSchema = z.object({
  targetCustomer: z
    .string()
    .describe('The target customer for the website.'),
  desiredStyle: z.string().describe('The desired style of the website.'),
  keyFeatures: z.string().describe('The key features of the website.'),
});
export type GenerateWebsiteConceptInput = z.infer<
  typeof GenerateWebsiteConceptInputSchema
>;

const GenerateWebsiteConceptOutputSchema = z.object({
  concepts: z
    .array(z.string())
    .describe(
      'An array of website concept descriptions to inspire website content and messaging.'
    ),
});
export type GenerateWebsiteConceptOutput = z.infer<
  typeof GenerateWebsiteConceptOutputSchema
>;

export async function generateWebsiteConcept(
  input: GenerateWebsiteConceptInput
): Promise<GenerateWebsiteConceptOutput> {
  return generateWebsiteConceptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateWebsiteConceptPrompt',
  input: {schema: GenerateWebsiteConceptInputSchema},
  output: {schema: GenerateWebsiteConceptOutputSchema},
  prompt: `You are a creative marketing expert specializing in website content. Based on the target customer, desired style, and key features, generate three distinct website concept descriptions that will inspire website content and messaging. Make them short and snappy.

Target Customer: {{{targetCustomer}}}
Desired Style: {{{desiredStyle}}}
Key Features: {{{keyFeatures}}}

Concepts:`, // Ensure the output is assigned to the 'concepts' field
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const generateWebsiteConceptFlow = ai.defineFlow(
  {
    name: 'generateWebsiteConceptFlow',
    inputSchema: GenerateWebsiteConceptInputSchema,
    outputSchema: GenerateWebsiteConceptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {
      concepts: output?.concepts || [],
    };
  }
);
