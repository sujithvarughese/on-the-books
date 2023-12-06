import classes from "./styles/NoteItem.module.css";
import NoteContent from "./NoteContent.jsx";
import { useState } from "react";

const NoteItem = ({ note }) => {

	const [showContent, setShowContent] = useState(false)
	const [displayedNoteContent, setDisplayedNoteContent] = useState(null)


	return (
		<div className={classes.container}>

			<div className={classes.title} onClick={()=>setShowContent(!showContent)}>
				{ !showContent && <div className={classes.arrow}>▽</div>}
				{ showContent && <div className={classes.arrow}>△</div>}

				{note.title}
			</div>


		</div>
	);
};

export default NoteItem;