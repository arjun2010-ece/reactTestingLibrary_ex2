import React from 'react';
// import './Todos.css';



const Todos = ({ todos, select, selected }) => (
  <React.Fragment>
  {todos.map(todo => (
    <React.Fragment key={todo.title}>
      <h3 data-testid="item" className={ selected && selected.title === todo.title ? 'selected' :'' }>{todo.title}</h3>
      <div>{todo.description}</div>
      <button onClick={() => select(todo)}>Select</button>
    </React.Fragment>
  ))}
  </React.Fragment>
);
class TodosContainer extends React.Component {
  state = {
    todo: void 0,
    todos:[
        {
            title: 'todo1'
          },
          {
            title: 'todo2'
      }
    ]
  }
  select = (todo) => {
    this.setState({
      todo,
    });    
  }
  render() {
    // console.log('state value initial',this.state.todo);
    return (
      <Todos todos={this.state.todos} select={this.select} selected={this.state.todo} />
    );
  }
}
export default TodosContainer;


