export interface Project {
  id: number;
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image?: string;
  featured: boolean;
  category: 'frontend' | 'backend' | 'fullstack' | 'ai-ml' | 'mobile';
}
