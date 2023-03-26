import { render } from "@testing-library/react";
import React from "react";
import SearchForm from "./SearchForm";


const mockChangeEvents = jest.fn();
describe("SearchForm", () =>{

    const mockEvents = [{id: 'mockId1',
        _embedded: {
          venues: [{
            address: {
              line1: 'mockAddress1'
            },
            city: {
              name: 'mockCity1'
            },
            state: {
              name: 'mockState1'
            },
            name: 'mockVenue1',
            postalCode: '12345'
          }]
        },
        dates: {
          start: {
            localDate: 'mockDate1',
            dateTime: 'mockTime1'
          }
        },
        info: 'mockInfo1',
        name: 'mockName1',
        url: 'mockURL1',
        images: [{ url: 'mockImgURL1' }]},{id: 'mockId2',
        _embedded: {
          venues: [{
            address: {
              line1: 'mockAddress2'
            },
            city: {
              name: 'mockCity2'
            },
            state: {
              name: 'mockState2'
            },
            name: 'mockVenue2',
            postalCode: '12345'
          }]
        },
        dates: {
          start: {
            localDate: 'mockDate2',
            dateTime: 'mockTime2'
          }
        },
        info: 'mockInfo2',
        name: 'mockName2',
        url: 'mockURL2',
        images: [{ url: 'mockImgURL2' }]}]

    it('displays search button', ()=>{
        render(<SearchForm events={mockEvents} changeEvents={mockChangeEvents} />);


    })
}