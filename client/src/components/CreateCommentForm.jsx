import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import {createComment} from "../http/CommentAPI";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CreateCommentForm = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [homePage, setHomePage] = useState('');
    const [commentText, setCommentText] = useState('');


    const addComment = () => {
        let comment = new FormData();
        comment.append('username', username);
        comment.append('email', email);
        comment.append('homePage', homePage);
        comment.append('commentText', commentText);
        createComment(comment).then();
        handleClose();
    }


    return (
        <div>
            <>
                <Button variant="primary" onClick={handleShow}>
                    Create comment
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Creating comment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                        <Form.Group className="p-2">
                            <Form.Label>Username</Form.Label>
                            <Form.Control value={username} onChange={e => setUsername(e.target.value)} type="text"
                                          placeholder="Enter username"/>
                        </Form.Group>

                        <Form.Group className="p-2" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email"
                                          placeholder="Enter email"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="p-2" controlId="formBasicPassword">
                            <Form.Label>Home Page</Form.Label>
                            <Form.Control value={homePage} onChange={e => setHomePage(e.target.value)} type="url"
                                          placeholder="URL"/>
                        </Form.Group>

                        <Form.Group className="p-2">
                            <Form.Label>Text</Form.Label>
                            <Form.Control value={commentText} onChange={e => setCommentText(e.target.value)} type="text"
                                          placeholder="Enter your comment"/>
                        </Form.Group>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={addComment}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>


    );
};

export default CreateCommentForm;
