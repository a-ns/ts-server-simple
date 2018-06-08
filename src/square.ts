import Shape from "./shape";

export default class Square implements Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  area = () => {
    return this.width * this.height;
  };
  perimeter = () => {
    return 2 * this.width + 2 * this.height;
  };
}
