import React from "react/addons";
import chai from "chai";
import {expect} from "chai";

import IconInput from "../index.jsx";

describe("IconInput", function() {
  const TestUtils = React.addons.TestUtils;
  var defaultValue = "kitchen";
  var handleChange = chai.spy();
  var component;

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(
      <IconInput
        defaultValue= {defaultValue}
        onChange= {handleChange}
      />
    );
  });

  afterEach(()=>{
    React.unmountComponentAtNode(React.findDOMNode(component).parentNode);
  });

  it("Calls props.onChange properly when user changes icon", function() {
    expect(1).equal(2);
  });

  // Add more as needed.

});
