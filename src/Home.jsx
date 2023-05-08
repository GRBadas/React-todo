import React, { useEffect, useState } from "react";
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import { Container, List } from "@mui/material";
const LOCAL_STORAGE_KEY = "todo:savedTasks"

export default function Home() {
    const [todos, setTodos] = useState([]);

    function setTodosAndSave(newTodos) { // Salvar no Local storage
      setTodos(newTodos);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos))
    }

    function loadSavedTodos() {  // Carregar local storage
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
      if(saved) {
        setTodos(JSON.parse(saved))
      }
    }
      
    useEffect(() => {
      loadSavedTodos();
    }, []) 

    const addTodo = (todo) => { // Criar nova tarefa
        console.log(todo)
        setTodosAndSave([...todos, todo]);
    };

    const deleteTodo = (id) => { // Deletar tarefa
        var filtered = todos.filter((todo) => todo.id !== id)
        setTodosAndSave(filtered);
    }

    const editTodo = (id, editedText) => { // Editar tarefa
      const index = todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        const updatedTodos = [...todos];
        updatedTodos[index] = { id, text: editedText };
        setTodosAndSave(updatedTodos);
      }
    }
    
      
    
    return (
        <div>
        <Container maxWidth="xs" style={{marginTop: "1em"}}>
                <Form addTodo = {addTodo}/>
            <List sx={{ marginTop: "1em"}}>
                {todos.map((todo) => (
                <div key={todo.id} style={{marginTop:"0.5em"}}>
                    <TodoItem 
                    todo={todo} 
                    deleteTodo ={deleteTodo}
                    editTodo = {editTodo}
                    />
                </div>
                ))}
            </List>
      </Container>
        </div>
    )
}