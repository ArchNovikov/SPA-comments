const {Comment, User} = require('../models/models')

class commentController {

    async create(req, res) {
        const user = await User.findOne({ where: {username: req.body.username, email: req.body.email} });
        console.log(user)
        if(user) {
            await Comment.create({text: req.body.text, userId: user.id});
        } else {
            const user = await User.create({username: req.body.username, email: req.body.email, homePage: req.body.homePage})
            await Comment.create({text: req.body.text, userId: user.id});
        }

        return res.json(req.body);
    }

    async getAll(req, res) {
        const comments = await Comment.findAll()
        return res.json(comments);
    }

    async getOne(req, res) {
        return res.json(req.params);
    }

}

module.exports = new commentController();