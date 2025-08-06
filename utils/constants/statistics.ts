export interface StatisticItem {
  value: number;
  suffix?: string;
  label: string;
}

export const HOME_STATISTICS: StatisticItem[] = [
  {
    value: 10,
    label: 'Specialized Departments'
  },
  {
    value: 27,
    label: 'LGAs Covered Statewide'
  },
  {
    value: 12,
    label: 'Strategic Partners'
  },
  {
    value: 10,
    label: 'Active Projects'
  }
];

export const PROJECTS_STATISTICS: StatisticItem[] = [
  {
    value: 10,
    label: 'Key Projects'
  },
  {
    value: 6,
    label: 'Partner Agencies'
  },
  {
    value: 27,
    label: 'LGAs Served'
  },
  {
    value: 10,
    label: 'Strategic Goals'
  }
];
