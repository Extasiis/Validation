import mongoose from 'mongoose'

const service = process.env.NOTES_APP_MONGODB_HOST ? process.env.NOTES_APP_MONGODB_HOST : 'localhost'
const nameData = process.env.NOTES_APP_MONGODB_DATABASE ? process.env.NOTES_APP_MONGODB_DATABASE : 'mern-task'

const URI = `mongodb://${service}/${nameData}`

mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})

const connection = mongoose.connection

connection.once('open', () => {
    console.log('Database is connected')
})
