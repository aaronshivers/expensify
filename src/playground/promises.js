const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Fred',
      age: 307
    })
    // reject('Something went wrong')
  }, 5000)  
})

console.log('before')

promise
  .then(data => {
    console.log('1', data)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('This is another promise')
      }, 5000)  
    })
  })
  .then(str => console.log('Does this run?', str))
  .catch(err => console.log('error', err))

console.log('after')
