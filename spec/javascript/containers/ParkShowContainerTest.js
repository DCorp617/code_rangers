import React from 'react'
import ParkShowContainer from '../../../app/javascript/react/container/ParkShowContainer'
import testHelper from '../testHelper'
import { BrowserRouter } from "react-router-dom"

describe('ParkShowContainer', () => {
  let wrapper
  let parkShow

  beforeEach(() => {
    parkShow = [
      {name: 'Glacier Bay', state_id: 2, description: 'This is a national park'}
    ]

    wrapper = shallow(
      <ParkShowContainer />
    );
  });

  it('should check the default state of a national park', () => {

    expect(wrapper.state()).toEqual({ parkShow: {} })
  })
})
