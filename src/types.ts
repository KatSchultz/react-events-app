export interface Events {
  event: Event;
}

export interface Event {
  id: string;
  _embedded: {
    venues: { 
      address: {
        line1: string
      },
      city: {
        name: string
      },
      state: {
        name: string
      },
      name: string,
      postalCode: string
    }[];
  };
  dates: {
    start: {
      localDate: string;
      dateTime: string;
    };
  };
  name: string;
  url: string;
  images: { url: string }[];
}

export interface Filter {
  includeFamily?: string;
  date?: string;
  postalCode?: string;
  classificationName: string;
}
