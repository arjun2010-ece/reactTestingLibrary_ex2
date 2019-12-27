import React from 'react';
import './App.css';
// import TodosContainer from './components/Todos';
import Note from './components/Note';

const App = () => {
  return (
    <div className='container'>
      {/* <TodosContainer /> */}
      <Note />
    </div>
  )
}
export default App;