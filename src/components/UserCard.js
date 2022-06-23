import React from 'react';
import { Link } from 'react-router-dom';

function UserCard (props) {
  const {name, phone, email, username, id} = props;

  return (
    <Link to={`/${id}`} className="w-4/5 mb-8">
      <div className="flex items-center py-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="w-1/4 flex justify-center">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <div className="w-3/4 text-sm font-light pl-4 border-l">
          <h4>Nome: {name}</h4>
          <h4>Username: {username}</h4>
          <h5>Telefone: {phone}</h5>
          <h5>E-mail: {email}</h5>
        </div>
      </div>
    </Link>
  )
}

export default UserCard;