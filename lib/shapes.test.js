const {Triangle, Square, Circle } = require("./shapes");

const letters = "RKM";
const letterColor = "pink";
const shapeColor = "purple";

describe("Circle test", () => {
  test("should render a circle", () => {
    const expectedSvg = new Circle(letters, letterColor, shapeColor);
    const circle = new Circle();
    circle.setColor("pink");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
    const circle = new Circle();
    circle.setColor("blue");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Triangle test", () => {
  test("should render a triangle element", () => {
    const expectedSvg =
    new Triangle(letters, letterColor, shapeColor);
    const triangle = new Triangle();
    triangle.setColor("green");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
    const triangle = new Triangle();
    triangle.setColor("purple");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  test("should render svg for a green polygon element", () => {
    const expectedSvg =
    new Square(letters, letterColor, shapeColor);
    const square = new Square();
    square.setColor("orange");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="red" />';
    const square = new Square();
    square.setColor("red");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
