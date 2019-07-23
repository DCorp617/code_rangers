import React from 'react';
import StateShowContainer from '../../../app/javascript/react/container/StateShowContainer'
import ParkShowContainer from '../../../app/javascript/react/container/ParkShowContainer'
import testHelper from '../testHelper'
import {BrowserRouter} from "react-router-dom"

describe('StateShowContainer', () => {
  let wrapper
  let stateObject
  let parks

  beforeEach(() => {
    stateObject = {
      name: "Alaska", description: "Kind of cold"
    }
    parks = [
      { name: "Glacier Bay",
        description: "Nice"
      },
      {
        name: "Denali",
        description: "Also nice"
      }
    ]

    wrapper = shallow(
        <StateShowContainer />
      );
  });

  it('should check the default state of a State\'s national park', () => {

    expect(wrapper.state()).toEqual({ parks: [], stateObject: {} })
  })

  it('should render the relevant ParkTiles', () => {
    wrapper.setState({ parks: parks, stateObject: stateObject })
    expect(wrapper.state()).toEqual(
      {
        stateObject: {
          name: "Alaska",
          description: "Kind of cold"
        },
        parks: [
          {
            name: 'Glacier Bay',
            description: "Nice"
          },
          {
            name: 'Denali',
            description: "Also nice"
          }
        ]
      })
  });
});
