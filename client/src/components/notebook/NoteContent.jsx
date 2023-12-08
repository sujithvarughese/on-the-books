import classes from "./styles/NoteContent.module.css"
import {Button, Form, Input, Modal, Card, Textarea, ButtonIcon} from "../../ui/index.js";
import {useEffect, useState} from "react";
import { MdOutlineEditNote } from "react-icons/md"
import { EditNoteForm } from "../../components"

const NoteContent = ({ note, updateNote }) => {

	const { title, content, updatedAt, createdAt } = note
	const updatedDate = new Date(note.updatedAt).toLocaleString('en-US',{ year:'numeric', month:'short', day:'numeric', timeZone: 'UTC' })
	const createdDate = new Date(note.createdAt).toLocaleString('en-US',{ year:'numeric', month:'short', day:'numeric', timeZone: 'UTC' })

	const [editMode, setEditMode] = useState(false)

	return (
		<div className={classes.container}>
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
						<div>
							Last updated on {updatedDate}
						</div>
						<div>
							Created on {createdDate}
						</div>
					</div>
					{
						editMode ?
							<div className={classes.form}>
								<EditNoteForm
									_id={note._id}
									title={title}
									content={content}
									updateNote={updateNote}
									closeForm={()=>setEditMode(false)}
								/>
							</div>
							:
							<div>
								<div className={classes.title}>
									{title}
								</div>
								<div className={classes.content}>
									{content}
								</div>
							</div>
					}
				</div>
		</div>
	);
};

export default NoteContent;