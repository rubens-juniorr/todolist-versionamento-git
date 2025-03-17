import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon  from '@mui/icons-material/Delete';

//CSS
import styled from "./todoList.module.css"

export default function TodoList() {

        return (
            <div className= {styled.todolist}>
              <div>
                <h3>Tarefa</h3>
              </div>
              <div>
                <h3>Status</h3>
              </div>
              <div>
                <h3>Opções</h3>
              </div>
              <hr />
            </div>
          
  );
}