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

// const book = {
//   title: 'Book Title',
//   author: 'Book Author',
//   publisher: {
//     name: 'Publisher Name'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)

// const address = ['123 S Oak St', 'Independence', 'MO', 64057]

// const [, city, state = 'Kansas'] = address

// console.log(`You are in ${ city } ${ state }`)

const item = ['coffee', '$2.00', '$2.50', '$3.00']

const [type, , price] = item

console.log(`A medium ${ type } costs ${ price }`)
