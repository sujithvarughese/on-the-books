import classes from "./styles/BookNoteItem.module.css";
import NoteContent from "./NoteContent.jsx";
import { useState } from "react";

const NoteItem = ({ bookID, note, editNote }) => {

	const [showContent, setShowContent] = useState(false)
	const [displayedNoteContent, setDisplayedNoteContent] = useState(null)


	return (
		<div className={classes.container}>

			<div className={classes.title} onClick={()=>setShowContent(!showContent)}>
				{ !showContent && <div className={classes.arrow}>▽</div>}
				{ showContent && <div className={classes.arrow}>△</div>}

				{note.title}
			</div>

			<div className={classes.content}>
				{
					showContent &&
					<NoteContent
						note={note}
						editNote={editNote}
					/>
				}
			</div>


		</div>
	);
};

export default NoteItem;