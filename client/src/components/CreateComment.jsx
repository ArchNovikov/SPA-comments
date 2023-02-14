import React from 'react';
import '../styles/App.css'
const CreateComment = (props) => {
    return (
        <div>
          <form>
              <input className="inputComment" placeholder="Nickname*"/>
              <input className="inputComment" placeholder="Your Email*"/>
              <input className="inputComment" placeholder="Your home page"/>
              <input className="inputComment" placeholder="Comment* (txt,jpg,png,doc)"/>
              <button className="createCommentButton">Send comment</button>
          </form>
        </div>
    );
};

export default CreateComment;