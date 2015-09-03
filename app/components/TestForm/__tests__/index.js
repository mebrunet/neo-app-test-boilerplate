import React from "react/addons";
import chai from "chai";
import {expect} from "chai";

import TestForm from "../index.jsx";
import TimeInput from "../../TimeInput";
import IconInput from "../../IconInput";

describe("TestForm", function() {
  const TestUtils = React.addons.TestUtils;
  var component;
  var testTime = "11:31";
  var testIcon = "bathroom";
  var onSubmitSpy = chai.spy();

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(
      <TestForm
        onSubmit= {onSubmitSpy}
      />);
  });

  afterEach(()=>{
    React.unmountComponentAtNode(React.findDOMNode(component).parentNode);
  });

  it("should initialize its state from its props", () => {
    expect(component.state.time).to.equal(component.props.defaultTime);
    expect(component.state.icon).to.equal(component.props.defaultIcon);
  });

  it("should change state with changes to TimeInput", () => {
    var timeInput = TestUtils.findRenderedComponentWithType(component, TimeInput);
    timeInput.props.onChange({target: {value: testTime}});
    expect(component.state.time).to.equal(testTime);
  });

  it("should change state with changes to IconInput", () => {
    var iconInput = TestUtils.findRenderedComponentWithType(component, IconInput);
    iconInput.props.onChange({target: {value: testIcon}});
    expect(component.state.icon).to.equal(testIcon);
  });

  it("should call props.onSubmit when sumbit button is pressed", () => {
    var form = TestUtils.findRenderedDOMComponentWithTag(component, "form");
    TestUtils.Simulate.submit(form);
    expect(onSubmitSpy).to.have.been.called.once();
    expect(onSubmitSpy.__spy.calls[0][0].time).to.equal(component.state.time);
    expect(onSubmitSpy.__spy.calls[0][0].icon).to.equal(component.state.icon);
  });

});
