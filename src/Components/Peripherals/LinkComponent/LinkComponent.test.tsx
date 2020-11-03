import React from "react";
import { shallow } from "enzyme";
import LinkComponent from "./LinkComponent";

describe("Link component behavior", () => {
   it("renders", () => {
      const linkComponent = shallow(<LinkComponent className="btn" title="Click me to Embrace me" label="click" to="RandomURL" />);
      expect(linkComponent).toHaveLength(1);
   });
});
