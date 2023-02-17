import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateCommentForm = () => {
    return (
        <Form>

            <Form.Group className="p-2">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username"/>
            </Form.Group>

            <Form.Group className="p-2" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="p-2" controlId="formBasicPassword">
                <Form.Label>Home Page</Form.Label>
                <Form.Control type="url" placeholder="URL"/>
            </Form.Group>

            <Form.Group className="p-2">
                <Form.Label>Text</Form.Label>
                <Form.Control type="text" placeholder="Enter your comment"/>
            </Form.Group>

            <Form.Group className="p-2" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"/>
            </Form.Group>
            <Button className="m-2" variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    );
};

export default CreateCommentForm;