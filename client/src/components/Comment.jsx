import React from 'react';

const Comment = (props) => {
    return (
        <div>
            <h2>{ props.name }</h2>
            <p>{ props.text }</p>
        </div>
    );
};

export default Comment;