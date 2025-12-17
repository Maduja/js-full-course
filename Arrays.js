//first way

// let fruits = new Array()
// fruits=['banana','apple','grapes']

//second way
// let fruits = []
// fruits=['banana','apple','grapes']

//third way
let fruits = ['banana','apple','grapes']
console.log(fruits);

//accessing array
console.log(fruits[2])

//adding

fruits[3]='mango'
console.log(fruits)

fruits.push('pineapple')
fruits.unshift('orange')

console.log(fruits)

//removing

console.log(fruits.pop())
console.log(fruits.shift())

//accesing all elements

for(i of fruits){
    console.log(i)
}

for(i in fruits){
    console.log(fruits[i])
}


console.log(fruits.length)

//matrix

let mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for(let i=0;i<mat.length;i++){
    for(let j=0;j<mat[i].length;j++){
        console.log(mat[i][j])
    }
}