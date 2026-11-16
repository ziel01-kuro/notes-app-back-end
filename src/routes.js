import e from "express";
import { createNote, getNotes, getNotesById, editNotesById, deleteNoteById } from './controller.js';

const router = e.Router();
router.post('/notes', createNote);
router.get('/notes', getNotes);
router.get('/notes/:id', getNotesById);
router.put('/notes/:id', editNotesById);
router.delete('/notes/:id', deleteNoteById);

export default router;