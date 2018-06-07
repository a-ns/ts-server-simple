interface Fooable {
  foo(): void;
}

class Foo implements Fooable {
  foo() {
    console.log("foo");
  }
}

const foo = new Foo();
foo.foo();
