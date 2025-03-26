import * as React from 'react';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useState } from 'react';
import { Container } from '@mui/system';

//CSS
import styled from "./todoList.module.css"


export default function TodoList() {
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
                      tarefa.map((item, index) => (
                        <li key={index}>
                          <p>{item}</p>
                          <input type="checkbox" style={{height: '18px'}}/>
                          <button type='submit' className={styled.buttons} onChange={handleChange}><MdEdit /></button>
                          <button type='submit' className={styled.buttons} onClick={() => handleDelete(index)}><MdDelete/></button>
                        </li>
                      ))
                    }
                  </ul>
                  <div>
                    <input type="text" value={novaTarefa} onChange={handleChange} placeholder="Nova tarefa...."  
                    style={{color: 'white', backgroundColor: '#2D2D2D', border: 'none', fontSize: '18px', marginTop: '20px', width: '20%'}}/>
                    <button  type='submit' className={styled.btn} onClick={handleSubmit}>+</button>
                  </div>
              </div>
    </Container>
  );
} 