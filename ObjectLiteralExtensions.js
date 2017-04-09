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

//Getter and Setter
{
  let o = {
    __id : 10,
    get id() { return this.__id++},
    set id(v) { this.__id = v}
  }
  console.log(o.id) //10
  console.log(o.id) //11
  console.log(o.__id) //12
  console.log(o.__id) //12
}
