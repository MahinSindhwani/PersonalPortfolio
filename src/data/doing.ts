export interface DoingItem {
  title: string;
  detail: string;
}

export const DOING_INTRO =
  "Mostly I build web apps end to end. The rest of the time I'm poking at whatever looks interesting.";

export const USUALLY: DoingItem[] = [
  { title: 'Full-stack apps', detail: 'from the interface to the database' },
  { title: 'Useful tools', detail: 'dashboards and automations that save someone time' },
  { title: 'AI tooling', detail: 'wiring models into real workflows' },
  { title: 'Teaching', detail: 'explaining things until they make sense' },
];

export const EXPLORING: DoingItem[] = [
  { title: 'Rust', detail: 'learning it from scratch' },
  { title: 'Backend & data', detail: 'going deeper on MongoDB and SQL' },
  { title: '3D modelling', detail: 'making cool things, maybe for a game of my own' },
  { title: 'New frameworks', detail: "Flutter and whatever's next, usually through a small, fun app" },
];
