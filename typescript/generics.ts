// function echo<T>(arg: T): T {
//   return arg
// }


// function swap<T,U>(tuple: [T, U]): [U,T] {
//   return [tuple[1], tuple[0]]
// }

// const result = swap(['string', 123]) 

interface IWithLength {
  length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}
const arrNumber = echoWithLength([1, 2, 3])
const str = echoWithLength('str')

class Queue<T> {
  private data = []
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}
const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())
console.log(queue.pop().toFixed())

interface KeyPair<T,U> {
  key: T,
  value: U
}
const kp1: KeyPair<number, string> = { key:1, value: 'string'}
const kp2: KeyPair<string, number> = { key:'1', value: 1 } 

let arr: number[] = [1,2,3]
let arr1: Array<number> = [2,3,4]