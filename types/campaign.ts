export interface Campaign {
  id: string;
  title: string;
  company: string;
  description: string;
  targetAmount: number;
  raisedAmount: number;
  investors: number;
  daysLeft: number;
  image: string;
  businessPlan: string;
  financialProjections: string;
  teamInfo: string;
  marketAnalysis: string;
  riskFactors: string;
  equity: number;
  minimumInvestment: number;
  createdAt: Date;
  status: 'active' | 'funded' | 'closed';
}

export interface Investor {
  id: string;
  name: string;
  profileImage: string;
  bio: string;
  investmentPreferences: {
    sectors: string[];
    investmentRange: {
      min: number;
      max: number;
    };
  };
  pastInvestments: number;
  availabilityCalendarId: string; // For cal.com integration
  contactInfo: {
    email: string;
    phone?: string;
  };
}

export interface InvestmentInterest {
  id: string;
  campaignId: string;
  investorId: string;
  status: 'interested' | 'meeting_scheduled' | 'invested' | 'declined';
  proposedAmount?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Meeting {
  id: string;
  campaignId: string;
  investorId: string;
  calendarEventId: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  scheduledFor: Date;
  notes?: string;
} 