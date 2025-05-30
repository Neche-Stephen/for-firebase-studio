import { z } from "zod";

export const AIConceptSchema = z.object({
  targetCustomer: z.string().min(10, { message: "Please provide a more detailed target customer description (min 10 characters)." }),
  desiredStyle: z.string().min(10, { message: "Please describe the desired style in more detail (min 10 characters)." }),
  keyFeatures: z.string().min(10, { message: "Please list key features with some detail (min 10 characters)." }),
});
export type AIConceptValues = z.infer<typeof AIConceptSchema>;


export const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});
export type ContactFormValues = z.infer<typeof ContactFormSchema>;
