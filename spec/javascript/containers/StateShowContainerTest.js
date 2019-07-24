import React from 'react';
import StateShowContainer from '../../../app/javascript/react/container/StateShowContainer'
import ParkShowContainer from '../../../app/javascript/react/container/ParkShowContainer'
import testHelper from '../testHelper'
import { BrowserRouter } from "react-router-dom"

describe('StateShowContainer', () => {
  let wrapper
  let stateObject
  let parks

  beforeEach(() => {
    stateObject = {
      name: "Alaska",
      description: "Kind of cold",
      parks: [
        { name: "Glacier Bay",
        description: "Nice"
      },
      {
        name: "Denali",
        description: "Also nice"
      }
    ]
    }

    wrapper = shallow(
        <StateShowContainer />
      );
  });

  it('should check the default state of a State\'s national parks', () => {
    expect(wrapper.state()).toEqual({ stateObject: {} })

  });

  it('should render the StateShowContainer and associated ParkShowContainers', () => {
    wrapper.setState({ stateObject: stateObject })
    expect(wrapper.state()).toEqual(
      {
        stateObject: {
          name: "Alaska",
          description: "Kind of cold",
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
        }
      }
    )
  })
});
