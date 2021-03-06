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

//Swapping variables the easy way. (Semicolons are important it seems)
var m = 10;
var n = 20;
[n,m] = [m,n];
console.log(m,n); // 20,10

//Destructuring Assignment Expressions
{
  let o = {a:1,b:2,c:3},
    a,b,c,p;
  p = {a,b,c} = o
  console.log(a,b,c,p) // 1 2 3 { a: 1, b: 2, c: 3 }
  console.log(p === o ) //true
}

//Discarding values
{
  let [,b] = foo()
  let {x,z} = bar()
  console.log(b,x,z) // 2,4,9
}

//Default Value Assignment
{
  let [a = 3, b = 6, c = 9 , d = 12] = foo()
  let {x = 5, y = 10, z = 15, w = 20} = bar()
  console.log(a,b,c,d) // 1 2 3 12
  console.log(x,y,z,w) // 4 6 9 20
}

// Default Value Assignment combined with alternate assignmment expression
{
  let {x,y,z,w: WW = 20} = bar()
  console.log(x,y,z,WW) //4,6,9,20
}

//Nested Destructuring
{
  let App = {
    model: {
      User : function() {}
    }
  };

  var { model: { User } } = App; // Instead of: var user = App.model.User
}

//Destructuring Parameters + Parameters Defaults
{
  let f6 = ({x = 10} = {}, {y} = {y: 10}) => {
    console.log(x,y)
  }
  f6() // 10 10
  f6({},{}) //10 undefined
  f6(undefined,undefined) // 10 10
  f6({},undefined) //10 10

  f6({x:2},{y:7}) // 2 7
}
