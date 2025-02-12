let students = ["shubham" , "john" , "don" , "fon"]
console.log(students[2])
console.log(students.length)
console.log(typeof(students))


let info = ["shubham" , "delhi" , 89.9]

info[0] = "john"
console.log(info)


info.push("shubham" , "delhi" , 99.8)
console.log(info)

stud3 = ["don" , "mumbai" , 95.4]
info.push(stud3)
console.log(info)


console.log(info.pop())
console.log(info)

info.pop()
console.log(info)



//concatenation:

let primary = ["red" , "yellow" , "blue"]
let secondary = ["orange" , "green" , "violet"]

let allColors = primary.concat(secondary)
console.log(allColors)

console.log(primary.reverse())
console.log(primary)


//splice:


let colors = ["red" , "yellow" , "blue" , "orange" , "pink" , "white"]

console.log(colors.splice(4))
console.log(colors.splice(0,1))
console.log(colors)
console.log(colors.splice(0 , 1 , "black" , "grey"))
console.log(colors)


let arr1 = [1]
let arr2 = [1]
console.log(arr1 === arr2)

let arr = ['a' , 'b']
let arrCopy = arr

console.log(arr == arrCopy)

arr.push('c')

console.log(arrCopy)

console.log(arrCopy.pop())



//Constant Arrays

const array = [1,2,3]
array.push(4)
console.log(array)


// array = [1,2,3,4]
// // console.log(array)