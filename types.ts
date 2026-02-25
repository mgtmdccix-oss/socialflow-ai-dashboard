export enum View {
  DASHBOARD = 'DASHBOARD',
  ANALYTICS = 'ANALYTICS',
  CALENDAR = 'CALENDAR',
  CREATE_POST = 'CREATE_POST',
  MEDIA_LIBRARY = 'MEDIA_LIBRARY',
  INBOX = 'INBOX',
  SETTINGS = 'SETTINGS',
  EXECUTIVE_REPORTS = 'EXECUTIVE_REPORTS'
}

export interface NavItem {
  id: View;
  label: string;
  icon: React.ReactNode;
}

export interface ViewProps {
  onNavigate: (view: View) => void;
}

export interface Post {
  id: string;
  platform: 'instagram' | 'tiktok' | 'facebook' | 'youtube' | 'linkedin' | 'x';
  content: string;
  image?: string;
  date: Date;
  status: 'scheduled' | 'published' | 'draft';
  stats?: {
    likes: number;
    views: number;
  };
}

export interface Message {
  id: string;
  sender: string;
  avatar: string;
  text: string;
  timestamp: string;
  isMe: boolean;
}

export interface Conversation {
  id: string;
  platform: 'instagram' | 'facebook' | 'x';
  user: string;
  avatar: string;
  lastMessage: string;
  unread: boolean;
  status: 'new' | 'pending' | 'resolved';
  messages: Message[];
}

export enum Platform {
  INSTAGRAM = 'instagram',
  TIKTOK = 'tiktok',
  FACEBOOK = 'facebook',
  YOUTUBE = 'youtube',
  LINKEDIN = 'linkedin',
  X = 'x'
}

// Executive Report Types
export interface ReportSection {
  id: string;
  type: 'metrics' | 'chart' | 'text' | 'summary';
  title: string;
  order: number;
  config?: any;
}

export interface ReportMetric {
  id: string;
  name: string;
  value: number | string;
  change?: number;
  category: 'engagement' | 'growth' | 'revenue' | 'performance';
  enabled: boolean;
}

export interface ReportBranding {
  logo?: string;
  primaryColor: string;
  secondaryColor: string;
  companyName: string;
}

export interface ReportTemplate {
  id: string;
  name: string;
  sections: ReportSection[];
  metrics: ReportMetric[];
  branding: ReportBranding;
  filters: ReportFilters;
  createdAt: Date;
  updatedAt: Date;
}

export interface ReportFilters {
  dateRange: { start: Date; end: Date };
  platforms: Platform[];
  compareWithPrevious: boolean;
}

export interface ExecutiveSummary {
  keyInsights: string[];
  topPerformers: {
    platform: Platform;
    metric: string;
    value: number;
    change: number;
  }[];
  trends: {
    title: string;
    description: string;
    impact: 'positive' | 'negative' | 'neutral';
  }[];
  recommendations: string[];
  periodComparison: {
    current: { start: Date; end: Date };
    previous: { start: Date; end: Date };
    changes: { metric: string; change: number }[];
  };
}
