import React from 'react';
import StatesIndexContainer from '../../../app/javascript/react/container/StatesIndexContainer'
import StateTile from '../../../app/javascript/react/components/StateTile'
import fetchMock from 'fetch-mock'
import testHelper from '../testHelper'
import {BrowserRouter} from "react-router-dom"


describe('StatesIndexContainer', () => {
  let wrapper
  let states

  beforeEach(() => {

    jasmineEnzyme();

    states = [
      {id: 1, name: 'Alaska', abbrevation: 'AK', description: "This is Alaska!"}
    ]

    fetchMock.get('/api/v1/states', {
      status: 200,
      body: states
    })

    wrapper = mount(
      <BrowserRouter>
        <StatesIndexContainer />
      </BrowserRouter>
      );
  });

  afterEach(fetchMock.restore)

  it('should render a StateTile component', (done) => {
    setTimeout(() => {

      expect(wrapper.find(StateTile).props()).toEqual({
        id: 1,
        abbrevation: "AK"
      })

      done()
    }, 0)
  });
});
