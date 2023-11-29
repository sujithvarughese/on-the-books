import classes from "./styles/NotesList.module.css"
import { NoteItem, AddNoteForm } from "../index.js";
import { Button } from "../../ui/index.js"
import { useEffect, useState } from "react";
import { axiosDB } from "../../utils/axios.js";


const NotesList = ({ bookID, bookNotes, updateBookDetails }) => {

	const [showAddBookNoteForm, setShowAddBookNoteForm] = useState(false)
	const [bookNotesState, setBookNotesState] = useState(bookNotes)

	const hideForm = () => {
		setShowAddBookNoteForm(false)
	}

	const addBookNote = (newBookNote) => {
		const duplicateNote = bookNotesState.find(noteInArray => noteInArray.title === newBookNote.title)
		if (duplicateNote || !newBookNote.title) {
			console.log("Invalid Note");
			return
		}
		const updatedBookNotes = [...bookNotesState, newBookNote]
		updateBookDetails({ bookNotes: updatedBookNotes})
		setBookNotesState(updatedBookNotes)
	}

	return (
		<div className={classes.container}>
			<div className={classes.head}>
				<div className={classes.title}>
					Book Notes
				</div>
				{
					!showAddBookNoteForm &&
					<div className={classes.addButton}>
						<Button onClick={()=>setShowAddBookNoteForm(true)}>Create New Note</Button>
					</div>

				}
			</div>


			{
				showAddBookNoteForm && <AddNoteForm addBookNote={addBookNote} hideForm={hideForm}/>
			}

			{
				bookNotesState.length === 0 ?
					<div className={classes.text}>
						No Book Notes. Make one by pressing the Create button!
					</div>
					:
				bookNotesState?.map((note, index) => {
					return (
						<NoteItem
							key={index}
							note={note}
							updateBookDetails={updateBookDetails}
							bookNotesState={bookNotesState}
							setBookNotesState={setBookNotesState}
						/>)
				})
			}

		</div>
	);
};

export default NotesList;