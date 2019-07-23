import React from 'react';
import StatesIndexContainer from '../../../app/javascript/react/container/StatesIndexContainer'
import StateTile from '../../../app/javascript/react/components/StateTile'
import testHelper from '../testHelper'
import {BrowserRouter} from "react-router-dom"


describe('StatesIndexContainer', () => {
  let wrapper
  let states

  beforeEach(() => {
    states = [
      {id: 1, name: 'Alaska', abbreviation: 'AK', description: "This is Alaska!"}
    ]

    wrapper = shallow(
        <StatesIndexContainer />
      );
  });


  it('should check the default state of states', () => {

    expect(wrapper.state()).toEqual({ states: [] })
  })

  it('should render a StateTile component', () => {

    wrapper.setState({ states: states })
    expect(wrapper.state()).toEqual({ states: [{ id: 1, name: 'Alaska', abbreviation: 'AK', description: "This is Alaska!" }] })
  });
});
