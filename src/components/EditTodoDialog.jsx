import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function EditTodoDialog({ open, dialogHandler, todo, editTodo }) {
  const [editedText, setEditedText] = React.useState(todo.text)

  const textHandler = () => {
    editTodo(todo.id, editedText)
    dialogHandler();
  };

  return (
      <Dialog
        open={open}
        keepMounted
        onClose={dialogHandler}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle>{"Editar tarefa"}</DialogTitle>
        <DialogContent>
          <TextField 
          fullWidth 
          defaultValue={editedText} 
          onChange={(e) => setEditedText(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler}>Cancelar</Button>
          <Button onClick={textHandler}>Confirmar</Button>
        </DialogActions>
      </Dialog>

  );
}