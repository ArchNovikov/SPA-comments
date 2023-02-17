import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css'
import Modal from 'react-bootstrap/Modal';
import CreateCommentForm from "./CreateCommentForm";

const CreateComment = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (

        <>
            <Button variant="primary" onClick={handleShow}>
                Create comment
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Creating comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateCommentForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );


}

export default CreateComment;