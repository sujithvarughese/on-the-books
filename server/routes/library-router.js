import express from "express";

const router = express.Router();
import {
	getLibrary,
	addBookToLibrary,
	getBookDetails,
	addBookNote,
	updateBookDetails,
	removeBookFromLibrary
} from "../controllers/library-controller.js";

router.route("/")
      .get(getLibrary)
      .post(addBookToLibrary);


router.route("/:id")
      .get(getBookDetails)
      .post(addBookNote)
      .patch(updateBookDetails)
      .delete(removeBookFromLibrary);


export default router;
