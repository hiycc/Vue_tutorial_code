let str = 'str'
// str = 123

let numberOrString: number | string
// numberOrString = 123
// numberOrString = 'abc'
// numberOrString.length

function getLength(input: string | number): number {
  const str = input as string //欺骗编译器input是string类型
  if (str.length){
    return str.length
  }else {
    console.log(str.length) //undefined
    return str.toString().length
  }
}
getLength(100)

//type guard 类型保护
function getLength2(input: string | number): number {
  if (typeof input === 'string'){
    return input.length
  } else {
    return input.toString().length
  }
}

function getLength3(input: string | number): number {
  if (input instanceof string){
    
  }
}