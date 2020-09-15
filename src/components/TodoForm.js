import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        title: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({ ...todo, title: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.title.trim()) {
            addTodo({ ...todo, id: uuidv4() });
            setTodo({ ...todo, title: "" });
        }
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField
                label="Task"
                type="text"
                name="title"
                value={todo.title}
                onChange={handleTaskInputChange}
            />
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default TodoForm;
