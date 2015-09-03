import React from "react";
import chai from "chai";
import {expect} from "chai";

import TestView from "../index.jsx";
import TestForm from "../../TestForm";

describe("TestView", function() {
  const TestUtils = React.addons.TestUtils;
  var component;
  var spy = chai.spy();

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<TestView testSubmit= {spy} />);
  });

  afterEach(() => {
    React.unmountComponentAtNode(React.findDOMNode(component).parentNode);
  });

  it("should correctly pass handleSubmit to testForm", () => {
    var testForm = TestUtils.findRenderedComponentWithType(component, TestForm);
    testForm.props.onSubmit();
    expect(spy).to.have.been.called.once();
  });
});
