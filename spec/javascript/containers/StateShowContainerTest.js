import React from 'react';
import StateShowContainer from '../../../app/javascript/react/container/StateShowContainer'
import ParkShowContainer from '../../../app/javascript/react/container/ParkShowContainer'
import testHelper from '../testHelper'
import {BrowserRouter} from "react-router-dom"


describe('StateShowContainer', () => {
  let wrapper
  let stateShow
  let parks

  beforeEach(() => {
    stateShow = [
      {name: 'Alaska'}
    ]
    parks = [
      {name: 'Glacier Bay', state_id: 2, description: "This is a national park"}
    ]

    wrapper = shallow(
        <StateShowContainer />
      );
  });


  it('should check the default state of a State\'s national park', () => {

    expect(wrapper.state()).toEqual({ parks: [], stateShow: {} })
  })

  it('should render a ParkShowContainer', () => {

    wrapper.setState({ parks: parks, stateShow: stateShow })
    expect(wrapper.state()).toEqual({ parks: [{name: 'Glacier Bay', state_id: 2, description: "This is a national park"}], stateShow: [{ name: "Alaska" }] })
  });
});
