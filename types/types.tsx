export type heroLinksProps = {
  label: string;
  href: string;
};

export type stackProps = {
  id: number;
  stackItems: string[];
  stackType: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
};

export type projectProps = {
  id: number;
  title: string;
  context: string;
  problem: string;
  solution: string;
  stack: string[];
}