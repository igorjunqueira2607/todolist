import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTodosFromUser } from '../services/todosAPI';

function TodoList () {
  const location = useLocation();
  const userId = location.pathname.split('/')[1];
  const [todos, setTodos] = useState([]);

  const listTodos = async () => {
    const response = await getTodosFromUser(userId);
    setTodos(response);
  };

  useEffect(() => {
    listTodos()
  }, [])

  return (
    <section className="">
      <div>
        <input />
        <button type="button">Adicionar Tarefa</button>
      </div>
      {todos.map((item) => (
        <div>
          <p>{item.title}</p>
        </div>
      ))}
    </section>
  )
}

export default TodoList;