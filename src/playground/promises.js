const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Fred',
    //   age: 307
    // })
    reject('Something went wrong')
  }, 5000)  
})

console.log('before')

promise.then(data => {
  console.log('1', data)
}).catch(err => {
  console.log('error', err)
})

console.log('after')
