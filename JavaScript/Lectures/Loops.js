// for(let i=1 ; i<=5 ; i++){
//     console.log(i)
// }

// for(let i=4 ; i>=1 ; i--){
//     console.log(i)
// }

// for(let i=10 ; i>=1 ; i-=3){
//     console.log(i)
// }


// for(let i=1 ; i<=3 ; i++){
//     for(let j=1 ; j<=3 ; j++){
//         console.log(j)
//     }
// }

// let i=1
// while(i<=5){
//     console.log(i)
//     i++
// }



let fruits = ["mango" , "apple" , "banana" , "grapes" , "orange" , "litchi"]

for(let i=fruits.length-1 ; i>0 ; i--){
    console.log(i , fruits[i])
}



let heroes = [ ["ironman" , "thor" , "hulk" , "spiderman"] , ["superman" , "batman" , "wonder woman"]]

for(let i=0 ; i<heroes.length ; i++){
    
    console.log(`List #${i}`)
    for(let j=0 ; j<heroes[i].length ; j++){
        console.log(heroes[i][j])
    }
}



let student = [ ["shubham" , 9.2] , ["anshul" , 8.7] , ["john" , 8.2]]

for(let i=0 ; i<student.length ; i++){
    for(let j=0 ; j<student[i].length ; j++){
        console.log(student[i][j])
    }
}


for(char of "Shubham"){
    console.log(char)
}

let names = [["shubham" , "india"] , ["jon" , "usa"] , ["putin" , "russia"]]
for(i of names){
    for(detail of i){
        console.log(detail)
    }
}


