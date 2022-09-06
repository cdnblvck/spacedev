export interface LaunchMission {
  id: number;
  name: string;
  launch_designator: string;
  type: string;
  description?: string;
}

export interface LaunchStatus {
  abbrev: string;
  description: string;
  id: number;
  name: string;
}

export interface SmallLaunch {
  id: string;
  name: string;
  image?: string;
  net: string;
  status: LaunchStatus;
  mission?: LaunchMission;
}

export interface Launch extends SmallLaunch {
  url: string;
  slug: string;
  launch_service_provider?: {
    id: number;
    name: string;
    type: string;
    url: string
  };
  pad?: {
    id: number;
    name: string;
  };
  window_end: string;
  window_start: string;
}

export interface Launches {
  count: number;
  next?: string;
  previous?: string;
  results: Launch[];
}
