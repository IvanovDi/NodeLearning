var getUser = (id, callback) => {
    var user = {
        id,
        name: 'Dima'
    };

    setTimeout(() => {
        callback(user);
    }, 3000)
};

getUser(12, (userObject) => {
    console.log(userObject);
});