import * as React from 'react';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useState } from 'react';
import Modal from 'react-modal';
import { Container } from '@mui/system';

//CSS
import styled from "./todoList.module.css"

Modal.setAppElement('#root');

export default function TodoList() {
  const [tarefa, setTarefa] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (id) => {
    setNovaTarefa(id.target.value);
  }

  const handleSubmit = (id) => {
    id.preventDefault();
    setTarefa([...tarefa, novaTarefa]);
    setNovaTarefa('');
  }

  const handleDelete = (id) => {
    if(!id === tarefa){
    const novasTarefas = [...tarefa];
    novasTarefas.splice(id, 0);
    setTarefa(novasTarefas);
    !tarefa.length ? setTarefa([]) : setTarefa(novasTarefas);
    }
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
                      tarefa.map((item, id) => ( 
                        <li key={id}>

                          <div className={styled.acoes}>
                          <p style={{margin: '0px', padding: '0px'}}>{item}</p>
                          <input type="checkbox" className={styled.checkbox}/>
                          <div style={{marginLeft: '350px ', width: '20px'}}>
                            <Modal style={{overlay: {backgroundColor: 'rgba(0, 0, 0, 0)', width: '52%', 
                              height: '50%', marginLeft: '480px', marginTop: '300px'}}}>
                              <h2 className={styled.modalEdit}>Deseja editar esse item?</h2>
                              <p style={{color:'#2D2D2D', fontSize: '18px', display: 'flex', justifyContent: 'center'}} className={styled.modalEdit}>Colocar as descrições das tarefas aqui.</p>
                              <form>
                                <input type="text" value={novaTarefa} onChange={handleChange} />
                                <p>{tarefa[id]}</p>
                                <button type="submit" style={{backgroundColor: '#0C70F2'}} className={styled.buttonsModal}>Não</button>
                                <button type="submit" className={styled.buttonsModal}>Sim</button>
                              </form>
                            </Modal>
                            <button type='submit' className={styled.buttons} onClick={handleOpenModal}><MdEdit/></button>
                          </div>
                          <div>
                          <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} style={{overlay: {backgroundColor: 'rgba(0, 0, 0, 0)', width: '43%', 
                              height: '50%', marginLeft: '560px', marginTop: '300px'}}}>
                              <h2 className={styled.modalEdit}>Deseja excluir esse item?</h2>
                              <p style={{color:'#2D2D2D', fontSize: '20px', marginTop: '50px', display: 'flex', justifyContent: 'center', width: '100%'}}>Colocar as descrições das tarefas aqui.</p>
                              <form>  
                                <input type="text" value={novaTarefa} onChange={handleChange} />
                                <p>{tarefa[id]}</p>
                                <button type="submit" style={{backgroundColor: '#0C70F2'}} className={styled.buttonsModal} onClick={() => handleCloseModal(true)}>Não</button>
                                <button type="submit" style={{color: '#000000'}} className={styled.buttonsModal} onClick={() => handleDelete(id.target.value)}>Sim</button>
                              </form>
                            </Modal>
                            <button type='submit' className={styled.buttons} onClick={handleOpenModal}><MdDelete/></button>
                          </div>
                          </div>
                        </li>
                      ))
                    }
                    <div>
                      <input type="text" value={novaTarefa} onChange={handleChange} placeholder="Nova tarefa...."  
                      style={{color: 'white', backgroundColor: '#2D2D2D', border: 'none', fontSize: '18px', width: '20%'}}/>
                      <button  type='submit' className={styled.btn} onClick={handleSubmit}>+</button>
                    </div>
                  </ul>
              </div>
    </Container>
  );
}