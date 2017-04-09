//Functions
let foo = () => {
  return [1,2,3]
}

let bar = () => {
  return {x:4,y:6,z:9}
}

//Basic destructuring - Array
{
  let [a,b,c] = foo()
  console.log(a,b,c) //1,2,3
}

//Basic destructuring - Object
{
  let {x,y,z} = bar()
  console.log(x,y,z) //4,6,9
}

//Object Property Assignment Pattern
{
  let {x: A,y: B,z: C} = bar()
  console.log(A,B,C) //4,6,9
}

//Swapping variables the easy way. It doesn't work so it is not that easy apparently
var m = 10
var n = 20
[n,m] = [m,n]
console.log(m,n) // 20,10
