isHalwathere = true

function waitInQueue(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isHalwathere){
                resolve('Buy it')
            }else{
                reject('Halwa finished')
            }
        },1000)
    })
}

// function buyHalwa(){
//     waitInQueue().then((message)=>{
//         console.log(message)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
//     .finally(()=>{
//         console.log('Go Home')
//     })
// }


async function buyHalwa(){
    try{
        let result = await waitInQueue()
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}

buyHalwa()