import {React, useEffect, useState} from 'react';
import { getUsers } from '../services/usersAPI';
import UserCard from './UserCard';

function UsersList () {
  const [users, setUsers] = useState([]);

  const listUsers = async () => {
    const response = await getUsers();
    setUsers(response);
  };

  useEffect(() => {
    listUsers()
  }, [])

  return (
    <main className="flex justify-center items-center w-full h-screen">
      <section className="grid grid-cols-3 place-items-center w-full">
        {users.map((user) => (
          <UserCard 
          key={user.id}
          id={user.id}
          name={user.name}
          phone={user.phone}
          username={user.username}
          email={user.email}
          />
        ))}
      </section>
    </main>
  )
}

export default UsersList;