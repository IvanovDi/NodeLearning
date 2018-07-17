// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('He this is work');
//         reject('Unable to fulfill promise');
//     }, 1000);
// });
//
// somePromise.then((message) => {
//     console.log(message);
// }).catch((message) => {
//     console.log(message);
// });

var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
}

asyncAdd(5, ).then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log('Shuld be 45 ', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});