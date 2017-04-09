//Test ES6 Functions with param names

var func1 = ({x = 5 , y = 6}) => {
  console.log(x,y)
}

func1({}) // 5,6
func1({y:7}) // 5,7
