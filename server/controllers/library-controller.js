import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";
import User from "../models/User.js";
import Book from "../models/Book.js";

// GET all books in library
const getLibrary = async (req, res) => {
	const { library } = await User.findOne({ _id: req.user.userID }).populate("library")

	res.status(StatusCodes.OK).json({
		message: "library retrieved successfully",
		library: library
	});
}

// POST add single book from req.body object
const addBookToLibrary = async (req, res) => {
	const { title, author } = req.body

	// destructure library array from appropriate user
	const { library } = await User.findOne({ _id: req.user.userID })

	// check if book is already in library, if so send error is response
	const duplicate = library.find(book => book.title === title)
	if (duplicate) {
		throw new BadRequestError("BookMobile already in Library!");
	}

	// create new mongo document for new book
	const newBook = await Book.create({ ...req.body, user: req.user.userID });

	// add new book to existing library
	library.push(newBook)

	// update user's library in database with library containing newly added book
	await User.findByIdAndUpdate(req.user.userID, { library: library })

	res.status(StatusCodes.CREATED).json({
		message: "library retrieved successfully",
		library: library
	});
}

const getBookDetails = async (req, res) => {
	// make sure book exists in requested user's library
	const book = await Book.findOne({ user: req.user.userID, _id: req.params.id })
	if (!book) {
		throw new BadRequestError("Book not found");
	}
	res.status(StatusCodes.OK).json({
		message: "BookMobile retrieved successfully",
		bookDetails: book
	});

}

const addBookNote = async (req, res) => {
	const book = await Book.findOne({ user: req.user.userID, _id: req.params.id })
	if (!book) {
		throw new BadRequestError("Book not found");
	}
	// new array of notes after adding new note
	const updatedBookNotes = book.bookNotes.push(req.body)
	// update old array of notes with newly created array
	await Book.findByIdAndUpdate(req.params.id, { ...book, bookNotes: updatedBookNotes });
	res.status(StatusCodes.OK).json({
		message: `${book.title} successfully updated`,
	});
}

// PATCH book details from req.body
const updateBookDetails = async (req, res) => {
	const book = await Book.findOne({ user: req.user.userID, _id: req.params.id })
	if (!book) {
		throw new BadRequestError("Book not found");
	}
	// req.body will contain key value pair to replace old pair
	const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body);
	res.status(StatusCodes.OK).json({
		message: `${book.title} successfully updated`,
		book: updatedBook
	});
};

// DELETE book from library using params
const removeBookFromLibrary = async (req, res) => {
	const book = await Book.findOne({ user: req.user.userID, _id: req.params.id })
	if (!book) {
		throw new BadRequestError("Book not found");
	}
	await Book.findByIdAndDelete(req.params.id);
	res.status(StatusCodes.OK).json({ message: `${book.title} successfully removed from library` });
};

export { getLibrary, addBookToLibrary, getBookDetails, addBookNote, updateBookDetails, removeBookFromLibrary }