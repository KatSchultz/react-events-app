export interface Events {
  event: Event;
}

export interface Event {
  id: string;
  _embedded: {
    venues: {postalCode: string}[]
  }
  dates: {
    start: {
      localDate: string;
    }
  };
  name: string;
}

export interface Filter {
  includeFamily?: string;
  date?: string;
  postalCode?: string;
}
