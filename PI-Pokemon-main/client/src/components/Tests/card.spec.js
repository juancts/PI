import React from "react";
//import "@testing-library/jest-dom/extend-expect";
import { shallow, configure } from "enzyme";
import Card, {types} from "../Card/Card";


// configure({ adapter: new Adapter() });

describe(" Componente Card", () => {
  const wrapperCard = shallow(<Card />);
  const divCard = wrapperCard.find("div");

  it("componente Card renderiza el componente", () => {
    expect(wrapperCard).toBeTruthy();
  });
});
