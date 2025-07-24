const { greetUser } = require('./script');

function sayHello(name) {
    return greetUser(name);
}

module.exports = { sayHello };
