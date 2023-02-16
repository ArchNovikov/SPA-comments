const {Comment, User} = require('../models/models');
const uuid = require('uuid');
const path = require('path');

class commentController {

    async create(req, res) {
        const {username, email, homePage, commentText} = req.body;
        const {file} = req.files;

        let fileName = '';
        if(file.name.slice(-3) === 'txt') {
            fileName = uuid.v4() + '.txt'
        } else {
            fileName = uuid.v4() + '.jpg'
        }

        await file.mv(path.resolve(__dirname, '..', 'static', fileName))

        let user = await User.findOne({ where: {username, email} });

        if(user) {
            await Comment.create({commentText, userId: user.id, file: fileName});
        } else {
            const user = await User.create({username, email, homePage});
            await Comment.create({commentText, userId: user.id, file: fileName});
        }

        return res.json(user);
    }

    async getAll(req, res) {
        const comments = await Comment.findAll()
        return res.json(comments);
    }

    async getOne(req, res) {
        const id = req.params.id
        const comment = await Comment.findOne({ where: {id} });
        const user = await User.findOne({where: {id: comment.userId}});

        const result = {
            comment: comment.commentText,
            file: comment.file,
            username: user.username
        };

        return res.json(result);
    }

}

module.exports = new commentController();