export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'ai-ml' | 'other';
  icon: string;
  color: string;
}
