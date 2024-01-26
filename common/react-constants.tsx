import { BuildIdeaContentBlockType } from '@/components/sections';
import {
  AudioLines,
  Bot,
  CalendarDays,
  CandlestickChart,
  FileText,
  HeartPulse,
  LifeBuoy,
  Newspaper,
  Sparkles,
} from 'lucide-react';

export const BuildIdeaContentData: {
  Assitants: BuildIdeaContentBlockType[];
  Chatbots: BuildIdeaContentBlockType[];
  Automations: BuildIdeaContentBlockType[];
} = {
  Assitants: [
    {
      icon: <FileText className="w-4 h-4 text-blue-500" />,
      headline: 'RFPs & Proposals',
      description: 'Streamline proposal creation and RFP response process.',
      demoURL:
        'https://www.stack-ai.com/solutions/use-cases/proposal-assistant',
    },
    {
      icon: <AudioLines className="w-4 h-4 text-blue-500" />,
      headline: 'Voice Assistants for Ops teams',
      description:
        'Integrate voice assistant technology for operational efficiency.',
      demoURL: 'https://www.stack-ai.com/solutions/use-cases/voice-assistant',
    },
    {
      icon: <HeartPulse className="w-4 h-4 text-blue-500" />,
      headline: 'Healthcare Assistants',
      description:
        'Improve patient experience and operational efficiency in healthcare.',
      demoURL: 'https://www.stack-ai.com/solutions/education',
    },
  ],
  Chatbots: [
    {
      icon: <CandlestickChart className="w-4 h-4 text-blue-500" />,
      headline: 'Financial Advisors',
      description: 'Get financial advice and insights interactively.',
      demoURL: 'https://www.stack-ai.com/solutions/chatbots',
    },
    {
      icon: <LifeBuoy className="w-4 h-4 text-blue-500" />,
      headline: 'Customer Support Chatbot',
      description: 'Enhance customer support with AI chatbot technology.',
      demoURL: 'https://www.stack-ai.com/solutions/chatbots',
    },
    {
      icon: <Bot className="w-4 h-4 text-blue-500" />,
      headline: 'Onboarding Chatbot',
      description:
        'Simplify the onboarding process with an interactive chatbot.',
      demoURL: 'https://www.stack-ai.com/solutions/chatbots',
    },
  ],
  Automations: [
    {
      icon: <CalendarDays className="w-4 h-4 text-blue-500" />,
      headline: 'Booking Assistants',
      description: 'Automate scheduling and booking processes.',
      demoURL: 'https://www.stack-ai.com/solutions/workflow-automation',
    },
    {
      icon: <Sparkles className="w-4 h-4 text-blue-500" />,
      headline: 'Automatic Report Generation',
      description: 'Automatically generate detailed, insightful reports.',
      demoURL: 'https://www.stack-ai.com/solutions/workflow-automation',
    },
    {
      icon: <Newspaper className="w-4 h-4 text-blue-500" />,
      headline: 'Newsletter Generation',
      description:
        'Effortlessly create engaging weekly newsletters with AI assistance.',
      demoURL: 'https://www.stack-ai.com/solutions/workflow-automation',
    },
  ],
};
