import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBHMbcTbDjzmVv0rj8pkSG8xKvuASwacFU",
  authDomain: "expensify-146d1.firebaseapp.com",
  databaseURL: "https://expensify-146d1.firebaseio.com",
  projectId: "expensify-146d1",
  storageBucket: "",
  messagingSenderId: "131842579292",
  appId: "1:131842579292:web:8169fb55d1e6258b"
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

database
  .ref('expenses')
  .on('child_removed', snapshot => console.log(snapshot.key, snapshot.val()))

database
  .ref('expenses')
  .on('child_changed', snapshot => console.log(snapshot.key, snapshot.val()))


database
  .ref('expenses')
  .on('child_added', snapshot => console.log(snapshot.key, snapshot.val()))

// database
//   .ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = []

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })

// const createArray = obj => obj.map(child => {
//   expenses.push
// })

// database
//   .ref('expenses')
//   .on('value', snapshot => {
//     const expenses = []

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })

database
  .ref('expenses')
  .push({
    description: 'ham',
    note: 'i like ham',
    amount: 500,
    createdAt: Date.now()
  })

// database
//   .ref('notes/-Lj4LQbE9uOPNhbXrN1w')
//   .update({
//     body: 'Buy Food'
//   })
//   .remove()

// database
//   .ref('notes')
//   .push({
//     title: 'Todo',
//     body: 'Eat Food'
//   })

// database
//   .ref('notes')
//   .push({
//     title: 'Todo2',
//     body: 'Cook Food'
//   })

// const firebaseNotes = {
//   notes: {
//     aslk3423: {
//       id: '12',
//       title: 'First Note',
//       body: 'This is a note'
//     },
//     l234ljksdf: {
//       id: '234',
//       title: 'Second Note',
//       body: 'This is another note'
//     }
//   }
// }

// const notes = [{
//   id: '12',
//   title: 'First Note',
//   body: 'This is a note'
// }, {
//   id: '234',
//   title: 'Second Note',
//   body: 'This is another note'
// }]

// database
//   .ref('notes')
//   .set(notes)

// database
//   .ref('notes/12')

// const onValueChange = database
//   .ref()
//   .on('value', snapshot => {
//     const val = snapshot.val()
//     console.log(`${ val.name } is a ${ val.job.title } at ${ val.job.company }.`)
//   },
//     err => console.log(err.message)
//   )

// database
//   .ref()
//   .set({
//     name: 'Andrew',
//     job: {
//       title: 'Software Developer',
//       company: 'Amazon'
//     }
//   })
//   .catch(err => console.log(err.message))

// const onValueChange = database
//   .ref()
//   .on('value', snapshot => console.log(snapshot.val()),
//     err => console.log(err.message)
//   )

// setTimeout(() => {
//   database
//     .ref('age')
//     .set(29)
// }, 3500)

// setTimeout(() => {
//   database
//     .ref()
//     .off('value', onValueChange)
// }, 7000)

// setTimeout(() => {
//   database
//     .ref('age')
//     .set(30)
// }, 10500)

// database
//   .ref()
//   .once('value')
//   .then(dataSnapshot => JSON.stringify(dataSnapshot, null, 2))
//   .then(json => console.log(json))
//   .catch(err => console.log(err.message))

// database.ref().set({
//   name: 'Bob Jenkins',
//   age: 233,
//   job: {
//     title: 'software developer',
//     company: 'Google'
//   },
//   stressLevel: 6,
//   location: {
//     city: 'Austin',
//     state: 'Texas'
//   }
// }).then(() => {
//   console.log('Data Saved')
// }).catch(err => {
//   console.log(err)
// })

// database
//   .ref()
//   .update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Houston'
//   })

// database.ref().set('this is some data')

// database.ref('age').set(71)

// database.ref('location/city',).set('Houston')

// database
//   .ref('attributes')
//   .set({
//     height: 500,
//     weight: 150
//   })
//   .then(() => console.log('Data Updated'))
//   .catch(err => console.log(err))

// database
//   .ref()
//   .remove()
//   .then(() => console.log('Item Removed'))
//   .catch(err => console.log(err.message))

// database
//   .ref('isAlive')
//   .set(null)
