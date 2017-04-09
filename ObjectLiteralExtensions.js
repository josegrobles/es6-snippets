//Concise properties
{
  let x = 2,y = 3,
  o = {x,y}
  console.log(o) // { x: 2, y: 3 }
}

//Concise Methods
{
  let o = {
    x() {},
    y() {}
  }
  console.log(o) // { x: [Function: x], y: [Function: y] }
}
