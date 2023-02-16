import React from 'react';
import '../styles/App.css'
const CreateComment = (props) => {
    return (
        <div className="createSendCommentBlock">
          <form>
              <input className="inputComment" style={{marginTop: 35}} placeholder="  Nickname*"/>
              <input className="inputComment" placeholder="  Your Email*"/>
              <input className="inputComment" placeholder="  Your home page"/>
              <textarea className="inputCommentField" placeholder="  Comment* (txt,jpg,png,doc)" />
              <button className="createCommentButton">Send comment</button>
          </form>
        </div>
    );
};

export default CreateComment;