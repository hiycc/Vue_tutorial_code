class Animal {
  readonly name: string;
  constructor(name) {
    this.name = name
  }
  protected run() {
    return `${this.name} is running`
  }
}
const snake = new Animal('lily')
snake.name = '123'
console.log(snake.run())

class Cat extends Animal{
  run() {
    return 'Meow, '+ super.run()
  }
}