const userCrl = {}

import User from '../models/user'

userCrl.getUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}

userCrl.createUser = async (req, res) => {
    const {username} = req.body
    const newUser = new User({username})
    await newUser.save()
    res.json('User create')
}

userCrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json('User delete')
}

export default userCrl;