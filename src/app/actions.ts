'use server';

import { generateWebsiteConcept, type GenerateWebsiteConceptInput, type GenerateWebsiteConceptOutput } from '@/ai/flows/generate-website-concept';
import type { ContactFormValues } from '@/lib/types'; // Defined in a new types file

export async function handleGenerateConcept(input: GenerateWebsiteConceptInput): Promise<GenerateWebsiteConceptOutput | { error: string }> {
  try {
    // Add a check for empty inputs which might cause issues with the AI model.
    if (!input.targetCustomer || !input.desiredStyle || !input.keyFeatures) {
      return { error: "All fields are required to generate concepts." };
    }
    const result = await generateWebsiteConcept(input);
    if (!result || !result.concepts || result.concepts.length === 0) {
        // Sometimes the AI might return empty or malformed responses
        return { error: "Could not generate concepts at this time. Please try again or refine your input." };
    }
    return result;
  } catch (error) {
    console.error("Error generating concept:", error);
    // Return a generic error message or a more specific one if possible
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { error: `Failed to generate concepts: ${errorMessage}` };
  }
}

export async function handleContactFormSubmit(data: ContactFormValues): Promise<{ success: boolean; message: string }> {
  console.log("Contact form submitted:", data);
  // Simulate API call
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Example: Could add validation or processing logic here
    if (!data.email.includes('@')) { // Basic validation example
        return { success: false, message: "Invalid email address provided." };
    }
    return { success: true, message: "Your message has been sent successfully! We'll be in touch soon." };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: "Failed to send message. Please try again later." };
  }
}
