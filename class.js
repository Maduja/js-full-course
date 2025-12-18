//object

// let user = {
//     name:'maduja',
//     age:25,
//     display: function(){

//     }
// }

//class
// class User{
//     // name = 'maduja'
//     // age = 25

//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }

//     display(){
//         console.log('Name :',this.name)
//         console.log('Age: ',this.age)
//     }
// }

// let madu = new User('siva',32)
// madu.display() 



class Student{
    #name
    age=14

    get getname(){
        return this.#name
    }

    set setname(name){
        this.#name = name
    }
}

let std = new Student()
std.setname = 'maduja'
console.log(std.getname)
console.log(std.age)

