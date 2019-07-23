import React from 'react';
import ReviewTile from '../../../app/javascript/react/components/ReviewTile'
import testHelper from '../testHelper'

describe('ReviewTile', () => {
  let wrapper

  beforeEach(() => {

    wrapper = mount(
        <ReviewTile
          rating={1}
          description={"Not that great"}
        />
      );
  });

  it('renders a header tag with the review rating', () => {
  expect(wrapper.props()["rating"]).toBe(1);
  });

  it('renders a paragraph tag with the review description', () => {
  expect(wrapper.find('p').text()).toBe("Not that great");
  });


});
