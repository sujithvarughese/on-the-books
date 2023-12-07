import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";
import Note from "../models/Note.js";

const getNotebook = async (req, res) => {
    const notebook = await Note.find({ book: req.params.id }).sort({ updatedAt: -1 })
    res.status(StatusCodes.OK).json({
        message: "notebook retrieved successfully",
        notebook: notebook
    });
}

const createNote = async (req, res) => {
    // const { bookID, title, content} = req.body
    const note = await Note.create(req.body)
    res.status(StatusCodes.OK).json({
        message: `${req.body.title} note successfully created`,
        note: note
    });
}

const updateNote = async (req, res) => {
    // const { _id, title, content } = req.body
    console.log(req.body)
    const note = await Note.findByIdAndUpdate(req.body._id, req.body)
    console.log(note)
    res.status(StatusCodes.OK).json({
        message: `${req.body.title} note successfully updated`,
        note: note
    });
}

export { getNotebook, createNote, updateNote}