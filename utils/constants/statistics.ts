export interface StatisticItem {
  value: number;
  suffix?: string;
  label: string;
}

export const HOME_STATISTICS: StatisticItem[] = [
  {
    value: 35000,
    suffix: '+',
    label: 'Trees Planted'
  },
  {
    value: 18500,
    label: 'Tons of Waste Recycled'
  },
  {
    value: 27000,
    label: 'Hectares of Land Protected'
  },
  {
    value: 1250,
    label: 'Environmental Officers Deployed'
  }
];

export const PROJECTS_STATISTICS: StatisticItem[] = [
  {
    value: 150,
    suffix: '+',
    label: 'Total Projects'
  },
  {
    value: 120,
    label: 'Projects Completed'
  },
  {
    value: 30,
    label: 'Projects Ongoing'
  },
  {
    value: 27,
    label: 'LGAs Covered'
  }
];
