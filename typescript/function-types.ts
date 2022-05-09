// function add(x: number, y: number): number {
//   return x + y
// }

// let isString: string = add(1,2)
// add(1, '123')

// function add1(x: number, y: number, z?: number, h: number): number {
//   return x + y + z
// }

const add = (x: number, y: number, z?:number): number => {
	return x + y + z
}

interface ISum {
  (x: number, y: number, z?:number): number
}

let add2: ISum = add
