import React from 'react';
import StateTile from '../../../app/javascript/react/components/StateTile'
import testHelper from '../testHelper'
import {BrowserRouter} from "react-router-dom"


describe('StateTile', () => {
  let wrapper

  beforeEach(() => {

    wrapper = mount(
        <StateTile
          id={1}
          key={1}
          abbreviation={"AZ"}
          path={"M135.1 389.7l-.3 1.5.5 1 18.9 10.7 12.1 7.6 14.7 8.6 16.8 10 12.3 2.4 25.4 2.7 6-39.6 7-53.1 4.4-31-24.6-3.6-60.7-11-.2 1.1-2.6 16.5-2.1 3.8-2.8-.2-1.2-2.6-2.6-.4-1.2-1.1-1.1.1-2.1 1.7-.3 6.8-.3 1.5-.5 12.5-1.5 2.4-.4 3.3 2.8 5 1.1 5.5.7 1.1 1.1.9-.4 2.4-1.7 1.2-3.4 1.6-1.6 1.8-1.6 3.6-.5 4.9-3 2.9-1.9.9-.1 5.8-.6 1.6.5.8 3.9.4-.9 3-1.7 2.4-3.7.4z"}
        />
      );
  });

  it("renders an SVG path of the state's shape", () => {
    expect(wrapper.props()["path"]).toBe("M135.1 389.7l-.3 1.5.5 1 18.9 10.7 12.1 7.6 14.7 8.6 16.8 10 12.3 2.4 25.4 2.7 6-39.6 7-53.1 4.4-31-24.6-3.6-60.7-11-.2 1.1-2.6 16.5-2.1 3.8-2.8-.2-1.2-2.6-2.6-.4-1.2-1.1-1.1.1-2.1 1.7-.3 6.8-.3 1.5-.5 12.5-1.5 2.4-.4 3.3 2.8 5 1.1 5.5.7 1.1 1.1.9-.4 2.4-1.7 1.2-3.4 1.6-1.6 1.8-1.6 3.6-.5 4.9-3 2.9-1.9.9-.1 5.8-.6 1.6.5.8 3.9.4-.9 3-1.7 2.4-3.7.4z")
  })
});

// expect(wrapper.find("href").props()["to"]).toBe("/states/1")
