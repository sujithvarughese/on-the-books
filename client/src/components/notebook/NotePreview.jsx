import classes from "./styles/NotePreview.module.css";

import React from 'react';

const NotePreview = ({ title, content }) => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                {title}
            </div>
            <div className={classes.content}>
                {content}
            </div>
        </div>
    );
};

export default NotePreview;