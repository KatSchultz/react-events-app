import axios from "axios";
import { config } from "../config";

export function fetchEvents() {
  return axios.get(
    `https://app.ticketmaster.com/discovery/v2/events?apikey=jjGKnYeiW8tmLlckQd0Rq6S5mG7Gt2by`
  );
}

//Katie's Key = jjGKnYeiW8tmLlckQd0Rq6S5mG7Gt2by
