"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Sparkles } from "lucide-react";
import { getCampaignIdeas } from "@/lib/ai/campaignAgent";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const schema = z.object({
  brand: z.string().min(2, "Brand name required"),
  goal: z.string().min(3, "Campaign goal required"),
  audience: z.string().min(2, "Target audience required")
});

export function LayoutAIAgentDemoSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { brand: "", goal: "", audience: "" },
  });
  const [ideas, setIdeas] = useState<string | null>(null);
  const [openAIMissing, setOpenAIMissing] = useState(false);
  const lastPrompt = useRef({});

  async function onSubmit(values: any) {
    setIdeas(null);
    setOpenAIMissing(false);
    lastPrompt.current = values;
    try {
      const ideaResult = await getCampaignIdeas(values.brand, values.goal, values.audience);
      setIdeas(ideaResult);
    } catch (err: any) {
      if (err?.message?.includes("OPENAI_API_KEY")) setOpenAIMissing(true);
      else setIdeas("Sorry, we couldn't generate ideas at the moment.");
    }
  }
  return (
    <section id="ai-agent-demo" className="container py-20 md:py-28 flex flex-col items-center">
      <div className="max-w-2xl text-center mb-8">
        <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary uppercase mb-4 animate-fade-slide">
          <Sparkles className="mr-2" /> AI-Powered Assistant
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Try the AI Campaign Agent
        </h2>
        <p className="text-muted-foreground mb-4">
          Instantly generate campaign ideas for any brand, goal, and target audience. Powered by OpenAI and Marketiq.
        </p>
      </div>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-xl mx-auto mb-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input placeholder="Brand (e.g. SodaCo)" {...register("brand")} />
          {errors.brand && <p className="text-xs text-red-500 mt-1">{errors.brand.message as string}</p>}
        </div>
        <div>
          <Input placeholder="Goal (e.g. Launch New Flavor)" {...register("goal")} />
          {errors.goal && <p className="text-xs text-red-500 mt-1">{errors.goal.message as string}</p>}
        </div>
        <div>
          <Input placeholder="Audience (e.g. Gen Z in US)" {...register("audience")} />
          {errors.audience && <p className="text-xs text-red-500 mt-1">{errors.audience.message as string}</p>}
        </div>
        <Button type="submit" className="md:col-span-3 mt-2 w-full" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Generate Ideas"}
        </Button>
      </form>
      {openAIMissing && (
        <Alert variant="destructive" className="max-w-xl mx-auto">
          <AlertTitle>Missing OpenAI API Key</AlertTitle>
          <AlertDescription>
            Please set the <b>OPENAI_API_KEY</b> in your environment to use AI features.
          </AlertDescription>
        </Alert>
      )}
      {ideas && !openAIMissing && (
        <Alert className="max-w-xl mx-auto">
          <AlertTitle>AI Campaign Ideas</AlertTitle>
          <AlertDescription>
            <pre className="whitespace-pre-wrap font-mono text-sm">{ideas}</pre>
          </AlertDescription>
        </Alert>
      )}
    </section>
  );
}