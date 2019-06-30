// const person = {
//   name: 'Carl',
//   age: 26,
//   location: {
//     planet: 'Earth',
//     temp: 93
//   }
// }

// const { name: firstName = 'Bert', age } = person

// console.log(`${ firstName } is ${ age }`)

// const { planet, temp: temperature } = person.location

// if (planet && temperature) {
//   console.log(`It's ${ temperature } on ${ planet }`)
// }

const book = {
  title: 'Book Title',
  author: 'Book Author',
  publisher: {
    name: 'Publisher Name'
  }
}

const { name: publisherName = 'Self-Published' } = book.publisher

console.log(publisherName)

