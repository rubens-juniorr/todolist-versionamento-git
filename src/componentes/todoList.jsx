import * as React from 'react';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useState } from 'react';
import { Container } from '@mui/system';

//CSS
import styled from "./todoList.module.css"


export default function TodoList() {
  const tarefas = ['estudar', 'estudar', 'futvôlei'];
  const [tarefa, setTarefa] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const handleChange = (e) => {
    setNovaTarefa(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTarefa([...tarefa, novaTarefa]);
    setNovaTarefa('');
  }

  const handleDelete = (index) => {
    const novasTarefas = [...tarefa];
    novasTarefas.splice(index, 1);
    setTarefa(novasTarefas);
  }

        return (
   
            <Container  maxWidth="md">
              <div className= {styled.todolist}>
                <h3>Tarefa</h3>
                <h3>Status</h3>
                <h3>Opções</h3>
              </div>
              <hr className={styled.separator}/>
              <div>
                  <ul> 
                    {
                      tarefas.map((tarefa, index) => (
                        <li key={index}>
                          <span>{tarefa}</span>
                          <input type="checkbox"/>
                          <button type='submit' onClick={() => handleChange(index)}><MdEdit /></button>
                          <button type='submit' onClick={() => handleDelete(index)}><MdDelete/></button>
                        </li>
                      ))
                    }
                  </ul>
                  <div>
                    <button  type='submit' className={styled.btn} onClick={handleSubmit}>+</button>
                  </div>
              </div>
                
    </Container>
  );
} 