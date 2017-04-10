import React from "react";
import { shallow } from "enzyme";
import Home from "../../../client/components/home";

describe("client/components/home/home.jsx", () => {
  it("render Home component", () => {
    const wrapper = shallow(
      <Home/>
    );
    expect(wrapper.find(".container-fluid")).to.have.length(1);
  });

  it("render Home component with children", () => {
    const Child = () => <span>Child</span> ;
    const wrapper = shallow(
      <Home>
        <Child/>
      </Home>
    );
    expect(wrapper.find(Child)).to.have.length(1);
  });
});
