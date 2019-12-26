import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAcvwVIcrEqRN-uwNN7zhKF5jT6pBLCteo",
    authDomain: "expensify-47048.firebaseapp.com",
    databaseURL: "https://expensify-47048.firebaseio.com",
    projectId: "expensify-47048",
    storageBucket: "expensify-47048.appspot.com",
    messagingSenderId: "265396388949",
    appId: "1:265396388949:web:d7ae0b2fdfc40e6d29c0dc",
    measurementId: "G-8HJR67LF4C"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default};





















// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job} at ${val.location.city}`)
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Weiting',
//     age: 21,
//     stressLevel: 6,

//     isSingle: true,
//     location: {
//         city: 'San Diego',
//         zip: 92092
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed', e);
// });



// database.ref().update({
//     name:'CarrotLove',
//     age: 22,
//     job: 'Software engineerer',
//     isSingle: null,
//     'location/city': "La Jolla"
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     }).catch((e) => {
//         console.log('Did not remove data', e)
//     });
