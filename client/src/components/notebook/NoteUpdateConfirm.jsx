import {
    Button,
    Form,
    Modal
} from "../../ui";


const NoteUpdateConfirm = () => {



    return (
        <Modal>
            <Form>
                Are you sure you want to change the title of this note?
                <Button>Yes</Button>
                <Button>No</Button>
            </Form>
        </Modal>
    );
};

export default NoteUpdateConfirm;