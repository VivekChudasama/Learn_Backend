const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://Vivek:Vivek123456@cluster0.l8ydvc3.mongodb.net/?appName=Cluster0')
        .then(client => {
            console.log('connected')
            callback(client)
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = mongoConnect