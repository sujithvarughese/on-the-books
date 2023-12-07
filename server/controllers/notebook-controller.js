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
    await Note.create(req.body)
    console.log(req.body)
    res.status(StatusCodes.OK).json({
        message: `${req.body.title} note successfully created`,
    });
}

const updateNote = async (req, res) => {
    // const { noteID, title, content } = req.body
    await Note.findByIdAndUpdate(req.body.noteID, { title: req.body.title, content: req.body.content })
    res.status(StatusCodes.OK).json({
        message: `${req.body.title} note successfully updated`,
    });
}

export { getNotebook, createNote, updateNote}