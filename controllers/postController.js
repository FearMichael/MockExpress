const axios = require("axios");
const Data = require("./baseController");

class Posts extends Data {
    constructor() {
        super(
            "https://jsonplaceholder.typicode.com/posts",
        )
    }

    getComments() {
        return this.getAll();
    }

    getCommentById(id) {
        return this.getById(id);
    }

    getCommentsByPost(postId) {
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    }

    createComment(data) {
        return this.create(data.id, data);
    }

    updateComment(id, data) {
        return this.update(id, data);
    }

    deleteComment(id) {
        return this.delete(id);
    }

}

module.exports = new Posts();