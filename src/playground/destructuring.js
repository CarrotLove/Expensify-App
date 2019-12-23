// const person = {
//     name: 'Weiting',
//     age: 21,
//     location: {
//         city: 'La Jolla',
//         temp: 23
//     }
// };

// const {name = 'Anonymous', age} = person;

// console.log(`${name} is ${age}.`);

// const {city, temp} = person.location;
// if (city && temp) {
//     console.log(`It's ${temp} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'HHH',
//     publisher: {
//         // name:'Weiting'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

// const address = ['9450 G', 'La Jolla', 'CA', '92093'];

// const [street, city, state, zip] = address;

// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
