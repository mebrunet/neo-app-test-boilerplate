import React from "react/addons";
import chai from "chai";
import {expect} from "chai";

import TimeInput from "../index.jsx";

describe("TimeInput", function() {
  const TestUtils = React.addons.TestUtils;
  var component;
  var defaultValue = "12:00";
  var handleChange = chai.spy();

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(
      <TimeInput
        defaultValue= {defaultValue}
        onChange= {handleChange}
      />
    );
  });

  afterEach(()=>{
    React.unmountComponentAtNode(React.findDOMNode(component).parentNode);
  });

  it("Calls props.onChange properly when user changes time", function() {
    expect(1).equal(2);
  });

  // Add more as needed.

});
