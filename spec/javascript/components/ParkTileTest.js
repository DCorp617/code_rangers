import React from 'react';
import ParkTile from '../../../app/javascript/react/components/ParkTile'
import testHelper from '../testHelper'
import { BrowserRouter } from "react-router-dom"

describe('ParkTile', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <ParkTile
          id={1}
          stateId={1}
          parkName={"Glacier Bay"}
        />
      </BrowserRouter>
    );
  })

  it('should be a link to the park show page', () => {
    expect(wrapper.find("Link").props()["to"]).toBe(`/states/1/parks/1`)
  });
});
