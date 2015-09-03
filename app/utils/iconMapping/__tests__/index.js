import iconMapping from "../index.js";
import chai from "chai";
import {expect} from "chai";

describe("iconMapping", () => {
 it("should have an image file for every filename", () => {
   for (let key in iconMapping ){
     require("../../../img/" + iconMapping[key].fileName);
   }
 });
});
