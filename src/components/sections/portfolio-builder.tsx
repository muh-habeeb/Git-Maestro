'use client';

import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {getPortfolioSuggestionsAction} from '@/lib/actions';
import type {PortfolioSuggestionsOutput} from '@/ai/flows/github-portfolio-suggestions';
import {Loader2, Sparkles, ArrowLeft} from 'lucide-react';
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';

const formSchema = z.object({
  learningProgress: z
    .string()
    .min(20, 'Please describe your progress in at least 20 characters.'),
});

export function PortfolioBuilder() {
  const [result, setResult] = useState<PortfolioSuggestionsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      learningProgress: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setResult(null);

    const res = await getPortfolioSuggestionsAction(values);

    if (res.success) {
      setResult(res.data);
    } else {
      setError(res.error);
    }
    setIsLoading(false);
  }

  return (
    <div className="w-full space-y-8">
      <h2 className="text-4xl md:text-5xl font-headline font-bold text-glow text-center">
        9. AI Portfolio Builder
      </h2>
      <p className="text-lg text-muted-foreground text-center mt-4 mb-8">
        Based on your progress, get an AI-powered competency score and
        personalized suggestions for your GitHub portfolio.
      </p>
      <Card className="bg-card/50 glow-border w-full">
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2">
            <Sparkles className="text-secondary" />
            Generate Portfolio Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="learningProgress"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>
                      Describe your Git & GitHub learning progress:
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 'I've learned how to initialize a repo, commit changes, and I'm starting to understand branching...'"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Generate Suggestions
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {error && (
        <Card className="mt-6 border-destructive bg-destructive/20">
          <CardHeader>
            <CardTitle className="text-destructive">An Error Occurred</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{error}</p>
          </CardContent>
        </Card>
      )}

      {result && (
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-1 bg-card/50">
            <CardHeader>
              <CardTitle className="font-headline">Competency Score</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-2">
              <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    innerRadius="70%"
                    outerRadius="85%"
                    data={[
                      {
                        name: 'score',
                        value: result.competencyScore,
                        fill: 'hsl(var(--primary))',
                      },
                    ]}
                    startAngle={90}
                    endAngle={-270}
                    barSize={15}
                  >
                    <PolarAngleAxis
                      type="number"
                      domain={[0, 100]}
                      angleAxisId={0}
                      tick={false}
                    />
                    <RadialBar
                      background={{ fill: 'hsl(var(--muted))' }}
                      dataKey="value"
                      cornerRadius={10}
                      className="fill-primary"
                    />
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-primary text-4xl font-bold text-glow"
                    >
                      {result.competencyScore}
                    </text>
                    <text
                      x="50%"
                      y="65%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-muted-foreground text-sm"
                    >
                      / 100
                    </text>
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-muted-foreground text-sm text-center -mt-4">
                AI-predicted score based on your progress.
              </p>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 bg-card/50">
            <CardHeader>
              <CardTitle className="font-headline">
                Portfolio Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap text-muted-foreground">
                {result.suggestions}
              </p>
            </CardContent>
          </Card>
        </div>
      )}
       <div className="flex justify-start w-full pt-8">
        <Button variant="outline" asChild>
            <a href="#exercise">
                <ArrowLeft /> Previous
            </a>
        </Button>
    </div>
    </div>
  );
}
