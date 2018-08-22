import Square from "./square";
import Circle from "./circle";
import Shape from "./shape";

const shapes: Shape[] = [];
shapes.push(new Square(4, 3));
shapes.push(new Circle(5));

shapes.forEach(s => console.log(s.perimeter()));
