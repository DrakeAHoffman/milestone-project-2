const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { registerUser, loginUser, logoutUser } = require("./user");
const { listTodosForUser, createTodoForUser, updateTodoItem, deleteTodoItem } = require("./todo");
const { Cart_Item } = require("./models");

dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 3003;

app.get("/", (req, res) => {
    res.send({
        message: "Hello Developers!",
        secret: process.env.NOT_SO_SECRET,
    });
});

app.post("/register", express.json(), async (req, res) => {
    try {
        const { username, password } = req.body;
        const userId = await registerUser(username, password);
        res.send({
            message: "User registered successfully!",
            userId,
        });
    } catch (err) {
        res.status(400).send({
            message: "Error registering user!",
            error: err.message,
        });
    }
});

app.post("/login", express.json(), async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const token = await loginUser(username, password);
        res.send({
            message: "User logged in successfully!",
            token,
        });
    } catch (err) {
        res.status(400).send({
            message: "Error logging in user!",
            error: err.message,
        });
    }
});

app.post("/logout", express.json(), async (req, res) => {
    try {
        const { token } = req.body;
        await logoutUser(token);
        res.send({
            message: "User logged out successfully!",
        });
    } catch (err) {
        res.status(400).send({
            message: "Error logging out user!",
            error: err.message,
        });
    }
});

app.get("/todos", express.json(), async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const todos = await listTodosForUser(token);
        res.send({
            message: "Todos retrieved successfully!",
            todos,
        });
    } catch (err) {
        res.status(400).send({
            message: "Error retrieving todos!",
            error: err.message,
        });
    }
});

app.post("/todos", express.json(), async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const { name } = req.body;
        const todo = await createTodoForUser(token, name);
        res.send({
            message: "Todo created successfully!",
            todo,
        });
    } catch (err) {
        res.status(400).send({
            message: "Error creating todo!",
            error: err.message,
        });
    }
});

app.put("/todos/:id", express.json(), async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const { id } = req.params;
        const { name, completed } = req.body;
        const todo = await updateTodoItem(token, id, name, completed);
        res.send({
            message: "Todo updated successfully!",
            todo,
        });
    } catch (err) {
        res.status(400).send({
            message: "Error updating todo!",
            error: err.message,
        });
    }
});

app.delete("/todos/:id", express.json(), async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const { id } = req.params;
        await deleteTodoItem(token, id);
        res.send({
            message: "Todo deleted successfully!",
        });
    } catch (err) {
        res.status(400).send({
            message: "Error deleting todo!",
            error: err.message,
        });
    }
});
app.get("/cart", express.json(), async (req, res) => {
    const cartItems = await Cart_Item.findAll();
    res.json(cartItems);
});

app.post("/cart", express.json(), async (req, res) => {
    const { name, price, quantity } = req.body;
    const newCartItem = await Cart_Item.create({ name, price, quantity });
    res.json(newCartItem);
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});