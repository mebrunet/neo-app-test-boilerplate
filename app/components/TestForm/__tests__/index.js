import React from "react/addons";
import chai from "chai";
import {expect} from "chai";

import TestForm from "../index.jsx";
import TimeInput from "../../TimeInput";
import IconInput from "../../IconInput";

describe("TestForm", function() {
  const TestUtils = React.addons.TestUtils;
  var component;
  var form;

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<TestForm />);
    form = TestUtils.findRenderedDOMComponentWithTag(component, "form");
  });

  afterEach(()=>{
    React.unmountComponentAtNode(React.findDOMNode(component).parentNode);
  });

  it("should change state with changes to TimeInput", () => {
    expect(1).equal(2);
  });

  it("should change state with changes to IconInput", () => {
    expect(1).equal(2);
  });

  it("should call props.onSubmit when sumbit button is pressed", () => {
    expect(1).equal(2);
  });

});
