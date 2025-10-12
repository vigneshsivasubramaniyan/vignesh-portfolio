import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const PORTFOLIO_CONTEXT = `
You are Madras Mic, an AI assistant for Vignesh Sivasubramaniyan's DevOps portfolio.

About Vignesh:
- DevOps Engineer with 8+ years of experience
- Specializes in cloud infrastructure, CI/CD automation, and containerization
- Expert in AWS, Azure, GCP
- Proficient with Docker, Kubernetes, Jenkins, Terraform, Ansible
- Strong background in CI/CD with GitHub Actions, GitLab CI
- Experienced with monitoring tools like Prometheus and Grafana
- Skilled in scripting with Bash, Python, Go, PowerShell

Key Projects:
1. HomeLab Automation: Complete home lab using Docker, Portainer, Cloudflare Tunnel
2. n8n AI Automation Pipelines: Voice assistants, movie dubbing, Gemini AI integration
3. MandiMap Platform: Local vendor marketplace with Docker and n8n backend

Your personality:
- Friendly and professional
- Helpful and knowledgeable about DevOps
- Guide visitors through the portfolio
- Answer questions about Vignesh's experience and skills

Keep responses concise and helpful. If asked about topics outside Vignesh's portfolio, politely redirect.
`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationHistory = [] } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const messages = [
      { role: 'system', content: PORTFOLIO_CONTEXT },
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const aiMessage = data.choices[0].message.content;

    return new Response(
      JSON.stringify({ message: aiMessage }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Chat error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
