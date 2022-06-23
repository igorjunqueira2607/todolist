import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import UsersList from '../components/UsersList';

function MainPage () {
  return (
    <div>
      <Header />
      <UsersList />
      <Footer />
    </div>
  )
}

export default MainPage;