// function User(a){
//     this.name = a
// }

// let goms = new User('goms')
// let siva = new User('siva')

// console.log(goms,siva)


// function Sum(){
//     this.a=10
//     this.b=12
//     this.add = function(c){
//         return this.a+this.b+c
//     }
// }

// let tot = new Sum()
// console.log(tot.add(4))


function Sum(){
    this.a=12
    this.b=10
    this.add = function(c){
        return this.a+this.b+c
    }
}

let tot = new Sum()
console.log(tot.add(4))