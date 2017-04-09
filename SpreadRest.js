// Array flatenning

const arraySpreading = [3,4,5]
console.log(...arraySpreading) //3,4,5


//Concatenate arrays

const arraySpreadingConcat = [1, ...arraySpreading, 6]
console.log(arraySpreadingConcat)

//Function gathering

let funcGather = ([a,...b]) => {
  console.log(a,b)
}

funcGather([...arraySpreading]) //3,[4,5]

//Treating arrays quickly on Functions

let funcShift = (...args) => {
  args.shift()

  console.log(...args)
}

funcShift(1,4,5,6)
