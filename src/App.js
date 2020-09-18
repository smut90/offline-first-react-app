import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import fetchTodos from "./service/api";

const LOCAL_STORAGE_KEY = "todo-list";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos()
            .then(result => {
                setTodos(result);
            });

    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    function addTodo(todo) {
        setTodos([todo, ...todos]);
    }

    function toggleComplete(id) {
        if (todos) {
            setTodos(
                todos.map(todo => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        };
                    }
                    return todo;
                })
            );
        }
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div className="App">
            <Typography style={{ padding: 16 }} variant="h1">
                React Todo
            </Typography>
            <TodoForm addTodo={addTodo} />
            <TodoList
                todos={todos}
                removeTodo={removeTodo}
                toggleComplete={toggleComplete}
            />
        </div>
    );
}

export default App;
