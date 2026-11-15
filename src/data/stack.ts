export interface StackItem {
  name: string;
  primary?: boolean;
}

export interface StackGroup {
  label: string;
  items: StackItem[];
}

export const STACK: StackGroup[] = [
  {
    label: 'languages',
    items: [
      { name: 'typescript', primary: true },
      { name: 'javascript', primary: true },
      { name: 'python', primary: true },
      { name: 'java' },
      { name: 'dart' },
    ],
  },
  {
    label: 'frameworks',
    items: [
      { name: 'react', primary: true },
      { name: 'express', primary: true },
      { name: 'flutter' },
      { name: 'reactflow' },
      { name: 'tanstack' },
      { name: 'cloudscape' },
    ],
  },
  {
    label: 'data & cloud',
    items: [
      { name: 'mongodb', primary: true },
      { name: 'azure', primary: true },
      { name: 'postgres' },
      { name: 'supabase' },
      { name: 'pandas' },
      { name: 'numpy' },
    ],
  },
  {
    label: 'tools',
    items: [{ name: 'posthog' }, { name: 'vitest' }, { name: 'selenium' }],
  },
];
