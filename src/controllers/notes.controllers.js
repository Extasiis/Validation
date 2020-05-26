const notesCrl = {};

import { Note } from '../models/notes'

notesCrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes)
}

notesCrl.createNote = async (req, res) => {
    const { title, content, date, author } = req.body
    const newNote = new Note({
        title,
        content,
        date,
        author
    });
    await newNote.save()
    res.json('New Note added')
};


notesCrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id)
    res.json(note)
}

notesCrl.updateNote = async (req, res) => {
    const {title, content, author} = req.body
    await Note.findByIdAndUpdate(req.params.id, {
        title,
        author,
        content
    })
    res.json({message: 'Update note'})
}

notesCrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.json({message: 'Delete note'}) 
}

export default notesCrl;