let map = new Map()

map.set('ch1','code io')
map.set(2,'logic io')
   .set(3,'undefined')

// console.log(map)

// console.log(map.get(2))
// console.log(map.has(2))

// map.delete(2)
// console.log(map)
// console.log(map.size)
// map.clear()

for(i of map){
    console.log(i)
}

for(i of map.keys()){
    console.log(i)
}

for(i of map.values()){
    console.log(i)
}