const promise = new Promise((resolve, reject) => {
    // resolve('This is my resolved data');
    reject('Something went wrong');
});

console.log('before');
promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error', error)
});

console.log('after')