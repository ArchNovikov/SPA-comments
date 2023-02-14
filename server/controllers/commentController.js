
class commentController {
    async create(req, res) {
        return res.json(req.body);
    }

    async getAll(req, res) {
        return res.json({message: "All comments"});
    }

}

module.exports = new commentController();