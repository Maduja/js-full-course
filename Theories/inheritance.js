class Animal{
    legs
    tail

    constructor(legs,tail){
        this.legs=legs
        this.tail=tail
    }

    display(){
        console.log('animal display')
        console.log(this.legs)
        console.log(this.tail)
    }
}


class Human extends Animal{
    nationality

    constructor(legs,tail,nationality){
        super(legs,tail)
        this.nationality = nationality
    }

    // display(){
    //     console.log(this.nationality)
    // }
}

let ani = new Animal(4,true)
// ani.display()

let maduja = new Human(2,false,'Sri lankan')
// console.log(maduja)

maduja.display()

