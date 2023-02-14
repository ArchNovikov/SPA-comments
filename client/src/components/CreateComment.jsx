import React from 'react';
import '../styles/App.css'
const CreateComment = (props) => {
    return (
        <div>
          <form>
              <input className="inputComment"/>
              <input className="inputComment"/>
              <button className="createCommentButton">Send</button>
          </form>
        </div>
    );
};

export default CreateComment;