import classes from "./styles/NoteItem.module.css";
import { useState } from "react";
import { MdKeyboardDoubleArrowUp, MdKeyboardDoubleArrowDown } from "react-icons/md";
import {ButtonIcon} from "../../ui/index.js";

const NoteItem = ({ note }) => {

	const [showContent, setShowContent] = useState(false)
	const [displayedNoteContent, setDisplayedNoteContent] = useState(null)

	const updatedDate = new Date(note.updatedAt).toLocaleString('en-US',{ year:'numeric', month:'short', day:'numeric', timeZone: 'UTC' })

	return (
		<div className={classes.container}>

			<div className={classes.titleDate}>
				<div className={classes.title}>
					{note.title}
				</div>
				<div className={classes.date}>
					{updatedDate}
				</div>
			</div>

			<div className={classes.content}>
				<div className={`${showContent ? classes.expanded : classes.collapsed}`}>
					{note.content}
				</div>
				<div className={classes.buttons}>
					{
						showContent ?
							<ButtonIcon onClick={()=>setShowContent(false)}><MdKeyboardDoubleArrowUp /></ButtonIcon>
							:
							<ButtonIcon	onClick={()=>setShowContent(true)}><MdKeyboardDoubleArrowDown /></ButtonIcon>
					}
				</div>
			</div>
		</div>
	);
};

export default NoteItem;