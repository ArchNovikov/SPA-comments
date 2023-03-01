import React from 'react';
import Card from 'react-bootstrap/Card';

const Comment = (props) => {
    return (
        <Card className="commentBlock">
            <Card.Body>
                <Card.Header><span style={{fontWeight: "bolder"}}>{props.name}</span> {props.date}</Card.Header>
                <Card.Text style={{marginLeft: 10}}>{props.text}</Card.Text></Card.Body>
        </Card>
    );
};

export default Comment;