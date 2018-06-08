import Shape from "./shape";

export default class Circle implements Shape {
  private radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  area = () => {
    return Math.PI * this.radius ** 2;
  };

  perimeter = () => {
    return Math.PI * 2 * this.radius;
  };
}
