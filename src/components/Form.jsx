import { TextField, Button, Paper } from "@mui/material";
import React, { useState } from "react";

export default function Form({addTodo}) {
    const [text, setText] = useState(null); // Define o estado inicial do texto como vazio
    const[id,setId] = useState(0) // Define o estado inicial do id como 0

    // Cria uma nova tarefa e adiciona à lista de tarefas
    const todoCreate = (text) => {
        const todoObj = {text: text, id: id}
        setId(id + 1);
        addTodo(todoObj)
        document.getElementById("outlined-basic").value = null
    }

    return (
        <Paper style={{ paddig: "1em"}}>
            <div style={{ display: "flex", justifyContent: "center"}}>
            <TextField  
            id="outlined-basic" 
            label="Tarefa" 
            variant="outlined" 
            onChange={(e) => setText(e.target.value)}
            fullWidth 
            />
            <Button style={{backgroundColor: "#4F4F4F"}} variant="contained" onClick={ () => todoCreate(text)}>Add</Button>
            </div>
        </Paper>
    )
}