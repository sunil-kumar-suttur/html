
//fetch api in javascript

fetch('https://jsonplaceholder.typicode.com/todos/2')
  .then(response => {
    if(!response.ok){
        throw new Error("Network respose was not ok");
    }
    return response.json()
  })
  .then(data => {
    console.log(data.title)
  })
  .catch(error =>{
    console.error("error fetching data")
  })


//promise in javascript

// var promise1 = new Promise(function(resolve,reject){
//     var success = true;
//     if(success){
//         resolve("its success")
//     }else{
//         error("its unsuccess")
//     }
// })


//  promise1.then(x => console.log(x));


// async and await in javascript

function addcart(){
    return new Promise(resolve => {
        setTimeout(() => {
          resolve('Simulated data');
        }, 1000);
      });
}

async function proceedToPayment(){
    const data = await addcart();
    console.log(data)
}

proceedToPayment();

  
