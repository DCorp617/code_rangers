import React from 'react';
import StateTile from '../../../app/javascript/react/components/StateTile'
import testHelper from '../testHelper'
import {BrowserRouter} from "react-router-dom"


describe('StateTile', () => {
  let wrapper

  beforeEach(() => {
    jasmineEnzyme();

    wrapper = mount(
      <BrowserRouter>
        <StateTile
          id={1}
          abbrevation={"AK"}
        />
      </BrowserRouter>
      );
  });

  it("should be a link to the state show page", () => {
    console.log(wrapper.text())
    expect(wrapper.find("Link").props()["to"]).toBe("/states/1")
  })

});
