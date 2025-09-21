'use server';

/**
 * @fileOverview Provides personalized GitHub portfolio suggestions based on learning progress.
 *
 * - generatePortfolioSuggestions - A function that generates portfolio suggestions.
 * - PortfolioSuggestionsInput - The input type for the generatePortfolioSuggestions function.
 * - PortfolioSuggestionsOutput - The return type for the generatePortfolioSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioSuggestionsInputSchema = z.object({
  learningProgress: z
    .string()
    .describe(
      'A description of the users learning progress in Git and GitHub.'
    ),
});
export type PortfolioSuggestionsInput = z.infer<typeof PortfolioSuggestionsInputSchema>;

const PortfolioSuggestionsOutputSchema = z.object({
  competencyScore: z
    .number()
    .describe(
      'A predicted competency score (0-100) based on the described learning progress.'
    ),
  suggestions: z
    .string()
    .describe(
      'Specific suggestions for content to include in the GitHub portfolio, such as code examples or project ideas.'
    ),
});
export type PortfolioSuggestionsOutput = z.infer<typeof PortfolioSuggestionsOutputSchema>;

export async function generatePortfolioSuggestions(
  input: PortfolioSuggestionsInput
): Promise<PortfolioSuggestionsOutput> {
  return generatePortfolioSuggestionsFlow(input);
}

const portfolioSuggestionsPrompt = ai.definePrompt({
  name: 'portfolioSuggestionsPrompt',
  input: {schema: PortfolioSuggestionsInputSchema},
  output: {schema: PortfolioSuggestionsOutputSchema},
  prompt: `You are an expert in Git and GitHub, skilled at assessing a beginner\'s learning progress and providing tailored suggestions for their GitHub portfolio.

  Based on the following learning progress description:
  {{learningProgress}}

  Provide a predicted competency score (0-100) reflecting their understanding of Git and GitHub.
  Then, suggest specific content examples (code snippets, project ideas) to showcase their skills in a GitHub portfolio.
`,
});

const generatePortfolioSuggestionsFlow = ai.defineFlow(
  {
    name: 'generatePortfolioSuggestionsFlow',
    inputSchema: PortfolioSuggestionsInputSchema,
    outputSchema: PortfolioSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await portfolioSuggestionsPrompt(input);
    return output!;
  }
);
