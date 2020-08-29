const Data = require("./baseController");

class Todos extends Data {
    constructor() {
        super("https://jsonplaceholder.typicode.com/todos");
    }

    getTodos() {
        return this.getAll();
    }

    getTodoById(id) {
        return this.getById(id);
    }

    createTodo(data) {
        return this.create(data);
    }

    updateTodo(id, data) {
        return this.update(id, data);
    }

    deleteTodo(id) {
        return this.delete(id);
    }

}
module.exports = Todos;