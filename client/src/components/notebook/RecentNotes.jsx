import classes from "./styles/RecentNotes.module.css";
import {useState} from "react";
import noteItem from "./NoteItem.jsx";

const RecentNotes = ({ recentNotes }) => {

    return (
        <div>
            <div>
                Recent Notes
            </div>
            {
                recentNotes.map((recentNote, index) => <div key={index}>{recentNote.content}</div>)
            }
        </div>
    );
};

export default RecentNotes;