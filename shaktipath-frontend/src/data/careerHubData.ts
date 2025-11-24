
import React from 'react';
import { GigFinderIcon } from '../components/icons/GigFinderIcon';
import { PitchGenIcon } from '../components/icons/PitchGenIcon';
import { PortfolioWriterIcon } from '../components/icons/PortfolioWriterIcon';
import { PricingAssistIcon } from '../components/icons/PricingAssistIcon';
import { CallSimIcon } from '../components/icons/CallSimIcon';
import { ProspectsIcon } from '../components/icons/ProspectsIcon';
import { GigLaunchpadIcon } from '../components/icons/GigLaunchpadIcon';
import { ScholarshipsIcon } from '../components/icons/ScholarshipsIcon';
import { AICoachIcon } from '../components/icons/AICoachIcon';


export interface CareerHubTool {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const careerHubTools: CareerHubTool[] = [
  {
    id: 'gig-finder',
    titleKey: 'career_tool_gig_finder_title',
    descriptionKey: 'career_tool_gig_finder_desc',
    icon: GigFinderIcon,
  },
  {
    id: 'pitch-generator',
    titleKey: 'career_tool_pitch_generator_title',
    descriptionKey: 'career_tool_pitch_generator_desc',
    icon: PitchGenIcon,
  },
  {
    id: 'portfolio-writer',
    titleKey: 'career_tool_portfolio_writer_title',
    descriptionKey: 'career_tool_portfolio_writer_desc',
    icon: PortfolioWriterIcon,
  },
  {
    id: 'pricing-assistant',
    titleKey: 'career_tool_pricing_assistant_title',
    descriptionKey: 'career_tool_pricing_assistant_desc',
    icon: PricingAssistIcon,
  },
  {
    id: 'call-simulator',
    titleKey: 'career_tool_call_simulator_title',
    descriptionKey: 'career_tool_call_simulator_desc',
    icon: CallSimIcon,
  },
  {
    id: 'my-prospects',
    titleKey: 'career_tool_my_prospects_title',
    descriptionKey: 'career_tool_my_prospects_desc',
    icon: ProspectsIcon,
  },
  {
    id: 'gig-launchpad',
    titleKey: 'career_tool_gig_launchpad_title',
    descriptionKey: 'career_tool_gig_launchpad_desc',
    icon: GigLaunchpadIcon,
  },
  {
    id: 'scholarships',
    titleKey: 'career_tool_scholarships_title',
    descriptionKey: 'career_tool_scholarships_desc',
    icon: ScholarshipsIcon,
  },
  {
    id: 'ai-coach',
    titleKey: 'career_tool_ai_coach_title',
    descriptionKey: 'career_tool_ai_coach_desc',
    icon: AICoachIcon,
  },
];
