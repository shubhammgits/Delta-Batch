const student = {
    name : "Shubham",
    age : 21,
    cgpa : 9.2,
    city : "Delhi"
}

let studnet2 = ["Shubham" , 21 , 9.2 , "Delhi"]

console.log(student)
console.log(studnet2)

//Post:

const post = {
    username : "@shhshubham",
    content : 50,
    likes : 100,
    reposts : 5,
    followers :1+"M",
    tags : ["@apnacollege" , "@codegeeks" , "@spacieeman"]
}

console.log(post)
console.log(post.username)
console.log(post.followers)
console.log(post.tags[1])


const obj = {
    1 : "a",
    2 : "b",
    true : "c",
    null : "d",
    undefined : "e"
}


const student3 = {
    name : "Shubham",
    age : 18,
    cgpa : 9.5,
    city : "Delhi"
}

student3.age = 21
student3.gender = "Male"
delete student3.city
console.log(student3)




//Nested

const classInfo = {
    shubham : {
        age : 21,
        cgpa : 9.2,
        city : "Delhi"
    },

    anshul : {
        age : 22,
        cgpa : 8.3,
        city : "Mumbai"
    },

    ankit : {
        age : 20,
        cgpa : 9.5,
        city : "Kolkata"
    }
}


classInfo.shubham.age = 18

console.log(classInfo)
console.log(classInfo.ankit)
console.log(classInfo.shubham.cgpa)



//Array of objects

const info = [
    {
        name : "Shubham",
        age : 21,
        cgpa : 9.2,
        city : "Delhi"
    },

    {
        name : "Anshul",
        age : 22,
        cgpa : 8.3,
        city : "Mumbai"
    },

    {
        name : "Ankit",
        age : 20,
        cgpa : 9.5,
        city : "Kolkata"
    }
]

console.log(info)

info.push({
    name : "Aniket",
    age : 19,
    cgpa : 9.0,
    city : "Chennai"
})

console.log(info)
console.log(info[0].name)

info[1].name = "Anshul Gupta"