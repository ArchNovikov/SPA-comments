
class commentController {
    async create(req, res) {
        return res.json(req.body);
    }

    async getAll(req, res) {
        return res.json({message: "All comments"});
    }

    async getOne(req, res) {
        return res.json({message: "One comment"})
    }

}

module.exports = new commentController();