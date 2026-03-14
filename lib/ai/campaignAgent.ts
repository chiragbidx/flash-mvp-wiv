"use server";

import { DEFAULT_OPENAI_MODEL, getOpenAIClient } from "@/lib/openai";

export async function getCampaignIdeas(
  brand: string,
  goal: string,
  audience: string
): Promise<string> {
  const openai = getOpenAIClient();
  const prompt = `Act as a marketing campaign strategist. Suggest 3 creative campaign ideas for the following brand and scenario:\n\nBrand: ${brand}\nGoal: ${goal}\nTarget Audience: ${audience}\n\nPlease provide:\n1. Campaign Title\n2. One-sentence summary\n3. Creative concept outline (2-3 sentences)\n\nFormat each campaign as:\nTitle: ...\nSummary: ...\nConcept: ...\n\nList three campaigns.`;
  const res = await openai.chat.completions.create({
    model: DEFAULT_OPENAI_MODEL,
    temperature: 0.6,
    messages: [{ role: "user", content: prompt }],
    max_tokens: 600,
  });
  // Defensive output
  const output =
    res.choices?.[0]?.message?.content?.trim() ||
    "No ideas generated. Try new inputs.";
  return output;
}