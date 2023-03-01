import React, {useEffect, useState} from 'react';
import Comment from "./components/Comment";
import {fetchComments} from "./http/CommentAPI";
import CreateComment from "./components/CreateComment";

function App() {

    const [comment, setComment] = useState([]);

    useEffect(() => {
        fetchComments().then(data => setComment(data))
    }, [])



    for (let i = 0; i < comment.length; i++) {
        comment[i].createdAt = comment[i].createdAt.slice(0, 16).replace('T', '-').split('-').reverse().join('-');
    }


    return (
        <div className="App">
            {
                comment.map(comment => (
                    <Comment name={comment.userId}
                             date={comment.createdAt}
                             text={comment.commentText}
                             key={comment.id}
                    />))
            }

            <CreateComment/>
        </div>
    );
}

export default App;
