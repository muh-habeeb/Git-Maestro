'use server';

import {
  generatePortfolioSuggestions,
  type PortfolioSuggestionsInput,
} from '@/ai/flows/github-portfolio-suggestions';

export async function getPortfolioSuggestionsAction(
  input: PortfolioSuggestionsInput
) {
  try {
    const suggestions = await generatePortfolioSuggestions(input);
    return {success: true, data: suggestions};
  } catch (e: any) {
    console.error(e);
    return {
      success: false,
      error: e.message || 'An unexpected error occurred.',
    };
  }
}
