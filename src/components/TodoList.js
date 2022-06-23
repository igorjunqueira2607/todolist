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
    <section className="mt-10 lg:mt-28 mb-16 w-4/5 max-w-3xl flex flex-col">
      <div className="flex flex-col mb-6 w-full items-end">
        <input placeholder="Adicione uma tarefa" className="bg-gray-50 mb-3 appearance-none border-2 border-gray-400 rounded w-full py-1.5 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"/>
        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1.5 px-3 rounded lg:w-1/4">Adicionar Tarefa</button>
      </div>
      {todos.map((item) => (
        <div className="px-1 py-2 text-xs font-light flex justify-between border border-gray-200">
          <div className="w-2/3">
            <p>{item.title}</p>
          </div>
          <div>
            { item.completed ?
              <p className="text-green-600">Tarefa Completa</p>
            :
            <p className="text-yellow-600">Tarefa Pendente</p>
            }
          </div>
        </div>
      ))}
    </section>
  )
}

export default TodoList;