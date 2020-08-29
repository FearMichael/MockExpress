const express = require("express");
const Posts = require("../controllers/postController");

const router = express.Router();

router.get("/", (req, res) => {

    Posts.getComments().then((data) => {
        res.send(data.data);
    }).catch((err) => res.status(500).send(err));

})

router.post("/", (req, res) => {

    const post = req.body;

    // req.body.id
    // req.body.title
    // req.body.author

    const {
        id,
        title,
        author,
        date
    } = req.body;

    if (!id || !title || !author || !date) {
        res.status(500).send("Post object incorrect");
    }

    Posts.createComment(post).then((data) => {
        res.send(data.data);
    }).catch((err) => res.status(500).send(err));

})

router.get("/:id", (req, res) => {

    const id = req.params.id;
    // OR
    // const { id } = req.params;

    Posts.getCommentById(id).then((data) => {
        res.send(data.data);
    }).catch((err) => res.status(500).send(err));

});

router.get("/comments/:id", (req, res) => {

    const { id } = req.params;

    Posts.getCommentsByPost(id)
        .then((data) => {
            console.log(data);
            res.send(data);
        })
    // .catch((err) => {
    //     console.log(err);
    //     res.status(500).send(err)
    // });

})

module.exports = router;