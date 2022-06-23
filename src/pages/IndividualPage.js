import { React } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TodoList from '../components/TodoList';

function IndividualPage () {
  return (
    <div className="">
      <Header />
      <TodoList />
      <Footer />
    </div>
  )
}

export default IndividualPage;