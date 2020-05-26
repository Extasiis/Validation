import express from 'express'
const router = express.Router()

import notesCrl from '../controllers/notes.controllers';

router.route('/')
    .get(notesCrl.getNotes)
    .post(notesCrl.createNote)

router.route('/:id')
    .get(notesCrl.getNote)
    .put(notesCrl.updateNote)
    .delete(notesCrl.deleteNote)


export default router;