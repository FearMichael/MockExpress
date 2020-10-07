const express = require("express");
const Todos = require("../controllers/todoController");

const router = express.Router();

router.get("/all", async (req, res) => {
    // Todos.getAll().then((todos) => {
    //     res.send(todos);
    // }).catch((err) => {
    //     res.status(500).statusMessage(err).end();
    // })

    try {
        const todos = await Todos.getAll();
        res.send(todos);
    } catch (err) {
        res.status(500).statusMessage(err).end();
    }
});
router.get("/:id", async (req, res) => {
    const { id } = req.params;

    const todo = await Todos.getById(id);
    res.send(todo);
});
router.post("/", async (req, res) => {
    const { id } = req.params;

    const todo = await Todos.createTodo(id);
    res.send(todo);
});
router.put("/:id", async (req, res) => {
    const { id } = req.params;

    const todo = await Todos.updateTodo(id);
    res.send(todo);
});
router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    const todo = await Todos.deleteTodo(id);
    res.send(todo);
});

module.exports = router;
