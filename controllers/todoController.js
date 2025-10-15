

exports.getTodos = (req, res) => res.json(Todo.getAll());

exports.getTodo = (req, res) => {
    const todo = Todo.getById(parseInt(req.params.id));
    todo ? res.json(todo) : res.status(404).json({ error: 'Not found' });
};

exports.createTodo = (req, res) => {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: 'Text required' });
    const newTodo = Todo.create(text);
    res.status(201).json(newTodo);
};

exports.updateTodo = (req, res) => {
    const updated = Todo.update(parseInt(req.params.id), req.body);
    updated ? res.json(updated) : res.status(404).json({ error: 'Not found' });
};

exports.deleteTodo = (req, res) => {
    const deleted = Todo.delete(parseInt(req.params.id));
    deleted ? res.json(deleted) : res.status(404).json({ error: 'Not found' });
};