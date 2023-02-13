const express = require('express');
require('dotenv').config();
const app = express();
const urlencodedParser = express.urlencoded({extended: false});


const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

let comments = [];

app.get('/', (req, res) => {
    return res.json(comments);
})

app.post('/', urlencodedParser, (req, res) => {
    if(!req.body) return res.sendStatus(400);
    createComment(req.body.username, req.body.text);

})
let users = [];



function createUser(name, username, email) {
    return {
        name,
        username,
        email,
    }
}

function createComment(user, text) {
    let comment = {
        "user": user.username,
        "text": text,

    }
    return comments.push(comment)
}


let Artem = createUser('Artem', 'arch', 'arch@ukr.net');
users.push(Artem);

