//Create cryptographic functionality
const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri: 'mongodb://localhost:27017/SOGs', //database uri
    secret: crypto,  ///will use for decryption, "secret"
    db: 'SOGs' //database name
}