import axios from "axios";
import { config } from "../config";
import { Event } from "../types";

export function fetchAllEvents() {
  return axios
  .get(`https://app.ticketmaster.com/discovery/v2/events?apikey=jjGKnYeiW8tmLlckQd0Rq6S5mG7Gt2by`)
  .then(response => response.data._embedded.events);
}

export function fetchEventById(id: string) {
  return axios
  .get(`https://app.ticketmaster.com/discovery/v2/events?id=vvG1VZ9aE3dTOh&apikey=jjGKnYeiW8tmLlckQd0Rq6S5mG7Gt2by`)
  .then(response => response)
}

export function fetchEventByKeyword() {
  return axios
  .get(`https://app.ticketmaster.com/discovery/v2/events?keyword=football&apikey=jjGKnYeiW8tmLlckQd0Rq6S5mG7Gt2by`)
  .then(response => response)
}

export function fetchEventByZipCode(postalCode: string) {
  return axios
  .get(`https://app.ticketmaster.com/discovery/v2/events?postalCode=${postalCode}&apikey=jjGKnYeiW8tmLlckQd0Rq6S5mG7Gt2by`)
  .then(response => response.data._embedded.events)
}

//Katie's Key = jjGKnYeiW8tmLlckQd0Rq6S5mG7Gt2by
