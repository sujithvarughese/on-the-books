import classes from "./styles/BookStatus.module.css"
import { MdOutlineEditNote } from "react-icons/md";
import {useState} from "react";
import {FormRow, Select} from "../../ui/index.js";


const BookStatus = ({ status, updateBookDetails}) => {

    const [statusState, setStatusState] = useState(status)
    const [editMode, setEditMode] = useState(false)

    return (
        <div className={classes.container}>
        <FormRow label="Status:">
            {
                editMode ?
                    <Select
                        type="text"
                        name="content"
                        value={statusState}
                        onChange={(e) => {
                            updateBookDetails({ status: e.target.value })
                            setStatusState(e.target.value)
                            setEditMode(false)
                        }}
                        list={["unread", "read", "reading"]}
                    />
                    :
                    <div className={classes.display}>
                        {statusState}
                        <MdOutlineEditNote className={classes.icon} onClick={()=>setEditMode(true)}/>
                    </div>
            }
        </FormRow>
        </div>
    );
};

export default BookStatus;