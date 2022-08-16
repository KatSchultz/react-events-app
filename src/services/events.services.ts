import axios from "axios";
import { config } from "../config";
import { Event, Filter } from "../types";

export function fetchAllEvents() {
  return axios
    .get(
      `https://app.ticketmaster.com/discovery/v2/events?apikey=jjGKnYeiW8tmLlckQd0Rq6S5mG7Gt2by`
    )
    .then((response) => response);
}

export function fetchEventById(id: string) {
  return axios
    .get(
      `https://app.ticketmaster.com/discovery/v2/events?apikey=jjGKnYeiW8tmLlckQd0Rq6S5mG7Gt2by`,
      {
        params: {
          id,
        },
      }
    )
    .then((response) => response);
}

export function filterEvents({
  includeFamily = "",
  date = "",
  postalCode = "",
  classificationName = "",
  keyword = '',
}: Filter) {
  return axios
    .get(
      `https://app.ticketmaster.com/discovery/v2/events?apikey=jjGKnYeiW8tmLlckQd0Rq6S5mG7Gt2by`,
      {
        params: {
          includeFamily,
          startDateTime: date,
          postalCode,
          classificationName,
          keyword,
        },
      }
    )
    .then((response) => response);
}

export function fetchEventByZipCode(postalCode: string) {
  return axios
    .get(
      `https://app.ticketmaster.com/discovery/v2/events?postalCode=${postalCode}&apikey=jjGKnYeiW8tmLlckQd0Rq6S5mG7Gt2by`
    )
    .then((response) => response);
}

//Katie's Key = jjGKnYeiW8tmLlckQd0Rq6S5mG7Gt2by
