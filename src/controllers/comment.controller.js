let _commentService = null;
class CommentController{
    constructor({CommentService}){
        _commentService = CommentService;
    }

    async get(req, res){
        const { userId } = req.params;
        const user = await _commentService.get(userId);
        return res.send(user);
    }

    async update(req, res){
        const { body } = req;
        const { commentId } = req.params;
        const updatedComment = await _commentService.update(commentId, body);
        return res.send(updatedComment);
    }

    async delete(req, res){
        const { commentId } = req.params;
        const deletedComment = await _commentService.delete(commentId);
        return res.send(deletedComment);
    }

    async getIdeasComments(req, res){
        const { ideaId } = req.params;
        const comments = await _commentService.getIdeasComments(ideaId);
        return res.send(comments);
    }

    async createComment(req, res){
        const { body } = req;
        const { ideaId } = req.params;
        const createdComment = await _commentService.createComment(body, ideaId);
        return res.status(201).send(createdComment);
    }


}

module.exports = CommentController;