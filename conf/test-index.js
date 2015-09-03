var chai = require("chai")
  , spies = require("chai-spies")
  , asPromised = require("chai-as-promised");

chai.use(spies);
chai.use(asPromised);

var testsContext = require.context("../app", true, /__tests__/);
testsContext.keys().forEach(testsContext);
