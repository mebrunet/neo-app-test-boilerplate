import React from "react";
import chai from "chai";
import {expect} from "chai";

import TestView from "../index.jsx";
import TestForm from "../../TestForm";

describe("TestView", function() {
  const TestUtils = React.addons.TestUtils;
  var component;
  var testForm;

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<TestView />);
    testForm = TestUtils.findRenderedComponentWithType(component, TestForm);
  });

  afterEach(() => {
    React.unmountComponentAtNode(React.findDOMNode(component).parentNode);
  });

  it("should correctly pass handleSubmit to testForm", () => {
    expect(1).equal(2);
  });
});
