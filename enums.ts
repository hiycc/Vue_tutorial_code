enum direction {
  Up = 10,
  Down,
  Right,
  Left
}
console.log(direction.Up) //0
console.log(direction[11]) //Down

//string
enum dir_str {
  Down,
  Right,
  Up = 'Up',
  LeftDown = 0
}
console.log(dir_str[0])