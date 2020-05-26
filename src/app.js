import express from 'express'
import cors from 'cors'

//routes
import notes from './routes/notes.routes'
import users from './routes/users.routes'

const app = express()

//seting
app.set('port', process.env.PORT || 3100)

//midllewares
app.use(cors())
app.use(express.json())

//routes
app.use('/api/notes', notes);
app.use('/api/users', users);


export default app