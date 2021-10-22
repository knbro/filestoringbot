const MongoClient = require('mongodb').MongoClient
const collection = require('./collection')

const state = {
    db: null
}

module.exports.connect = function (done) {
    url = process.env.DB_URL
    const dbname = 'mediaFile'

saveUser: (user) => {
        db.get().collection(collection.USER_COLLECTION).createIndex({ userId: 1 }, { unique: true })
        db.get().collection(collection.USER_COLLECTION).insertOne(user).catch((err) => {
            console.log('already existing user');
        })
    },

    MongoClient.connect(url,{ useUnifiedTopology: true } , (err, data) => {
        if (err) return done(err)
        state.db = data.db(dbname)
        done()
    })

    
}

module.exports.get = function () {
    return state.db
}
