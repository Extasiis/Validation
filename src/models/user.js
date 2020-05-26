import {Schema, model} from 'mongoose'

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trin: true,
        unique: true
    }
}, {
    timestamps: true
})

export default model('User', userSchema)