let todos = [];
let idCounter = 1;

module.exports = {
    getAll: () => todos,
    getById: (id) => todos.find(todo => todo.id === id),
    create: (text) => {
        const newTodo = { id: idCounter++, text, done: false };
        todos.push(newTodo);
        return newTodo;
    },
    update: (id, updates) => {
        const todo = todos.find(t => t.id === id);
        if (todo) Object.assign(todo, updates);
        return todo;
    },
    delete: (id) => {
        const index = todos.findIndex(t => t.id === id);
        if (index !== -1) {
            return todos.splice(index, 1)[0];
        }
    return null;
    }
};