type stringOrnumber = string | number

let num: stringOrnumber = 1
let str: stringOrnumber = 'str'

//字面量
// type direction = 'Up' | 'Down' | 'Right' | 'Left'
// let toWhere: direction = 'Up'

interface IName {
  name: string
}
type IPerson = IName & { age: number }
let person: IPerson = { name: 'lewis', age: 123}