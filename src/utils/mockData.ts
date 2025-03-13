
export interface Project {
  id: string;
  title: string;
  client: string;
  sourceLang: string;
  targetLang: string;
  wordCount: number;
  deadline: string;
  status: 'in-progress' | 'needs-review' | 'completed' | 'upcoming';
  progress: number;
  lastModified: string;
}

export interface Stats {
  title: string;
  value: string | number;
  change: number;
  icon: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Medical Device User Manual',
    client: 'MedTech Solutions',
    sourceLang: 'English',
    targetLang: 'Spanish',
    wordCount: 8500,
    deadline: '2023-06-15',
    status: 'in-progress',
    progress: 65,
    lastModified: '1 hour ago'
  },
  {
    id: '2',
    title: 'E-commerce Website Localization',
    client: 'Global Shop',
    sourceLang: 'English',
    targetLang: 'French',
    wordCount: 12700,
    deadline: '2023-06-20',
    status: 'needs-review',
    progress: 92,
    lastModified: '3 hours ago'
  },
  {
    id: '3',
    title: 'Legal Contract Translation',
    client: 'Law Partners LLC',
    sourceLang: 'German',
    targetLang: 'English',
    wordCount: 5200,
    deadline: '2023-06-10',
    status: 'in-progress',
    progress: 45,
    lastModified: '2 days ago'
  },
  {
    id: '4',
    title: 'Marketing Campaign Materials',
    client: 'BrandBoost Agency',
    sourceLang: 'English',
    targetLang: 'Japanese',
    wordCount: 4800,
    deadline: '2023-06-25',
    status: 'upcoming',
    progress: 0,
    lastModified: 'Not started'
  },
  {
    id: '5',
    title: 'Technical Documentation',
    client: 'TechCorp Industries',
    sourceLang: 'English',
    targetLang: 'Chinese',
    wordCount: 15300,
    deadline: '2023-06-05',
    status: 'completed',
    progress: 100,
    lastModified: '1 week ago'
  }
];

export const stats: Stats[] = [
  {
    title: 'Words Translated',
    value: '23,568',
    change: 12.5,
    icon: 'book-open-text'
  },
  {
    title: 'Active Projects',
    value: 3,
    change: 0,
    icon: 'folder'
  },
  {
    title: 'Earned This Month',
    value: '$1,245',
    change: 8.2,
    icon: 'dollar-sign'
  },
  {
    title: 'Translation Accuracy',
    value: '98.5%',
    change: 1.2,
    icon: 'check-circle'
  }
];
