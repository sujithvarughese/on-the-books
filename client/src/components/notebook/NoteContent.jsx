import classes from "./styles/NoteContent.module.css"
import {Button, Form, Input, Modal, Card, Textarea, ButtonIcon} from "../../ui/index.js";
import {useEffect, useState} from "react";
import { MdOutlineEditNote } from "react-icons/md"
import { EditNoteForm } from "../../components"
import {axiosDB} from "../../utils/axios.js";
import { MdArrowBackIosNew } from "react-icons/md";
import {useNavigate} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

const NoteContent = ({ note, goBack, editMode, setEditMode, updateNotebookState }) => {

	const { title, content, updatedAt, createdAt } = note
	const updatedDate = new Date(note.updatedAt).toLocaleString('en-US',{ year:'numeric', month:'short', day:'numeric', timeZone: 'EST' })
	const createdDate = new Date(note.createdAt).toLocaleString('en-US',{ year:'numeric', month:'short', day:'numeric', timeZone: 'EST' })

	const updateNote = async (updatedNote) => {
		const { noteID } = updatedNote
		try {
			const response = await axiosDB.patch("/notebook", { noteID, updatedNote })
			const { message, note } = response.data
			return { message, note }
		} catch (error) {
			throw new Error(error)
		}
	}

	return (
		<div className={classes.container}>

			<div className={classes.backButton}>
				{!editMode &&
				<ButtonIcon onClick={goBack}>
					<MdArrowBackIosNew />
				</ButtonIcon>
				}
			</div>
			<div className={classes.editButton}>
				{
					!editMode && updateNote &&
					<ButtonIcon
						onClick={(prevState)=>setEditMode(true)}
					>
						<MdOutlineEditNote />
					</ButtonIcon>
				}
			</div>
			<div className={classes.content}>

				<div className={classes.dates}>
					<div>Last updated on {updatedDate}</div>
					<div>Created on {createdDate}</div>
				</div>

				{editMode ?
				<AnimatePresence>
					<div className={classes.form}>
						<EditNoteForm
							noteID={note._id}
							title={title}
							content={content}
							updateNote={updateNote}
							closeForm={()=>setEditMode(false)}
							updateNotebookState={updateNotebookState}
						/>
					</div>
				</AnimatePresence>

				:
				<div>
					<div className={classes.title}>{title}</div>
					<div className={classes.content}>{content}</div>
				</div>
				}
			</div>
		</div>
	);
};

export default NoteContent;