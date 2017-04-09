{
  //Default values on a function
let foo = (x = 11, y = 21) => {
  console.log(x + y)
}

foo()
foo(undefined,4)
foo(null,4)

}

{
//Default value expressions

let bar = (val) => {
  console.log("bar called!")
  return y+val
}

let foo = (x = y + 3, z = bar(x)) => {
  console.log(x,z)
}

var y = 5
foo() // 8,13
foo(10) // 10,15

y = 6
foo(undefined,10) // 9,10
}
