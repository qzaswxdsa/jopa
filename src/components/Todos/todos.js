import React, { Fragment } from 'react'
import './style.css'

export class Todos extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos.length !== this.state.todos.length) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleTodo(id) {
    this.setState(state => {
      const newTodos = state.todos.map((i, ind) => ind === id ? {...i, checked: !i.checked} : i);
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return {
        todos: newTodos
      }
    })
  }

  addTodo(e) {
    e.preventDefault();
    this.setState(state => ({
      todos: [ ...state.todos, {
        value: state.value,
        checked: false
      }],
      value: '' 
    }));
  }

  handleComplet() {
    
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.addTodo}>
          <input type='text' value={this.state.value} onChange={this.handleChange}/>
        </form>
        <ul>
          {this.state.todos.map((item, index) => (
            <li key={index}>
              <div>
                <input checked={item.checked} onChange={() => this.handleTodo(index)} type="checkbox"/>
                <span>{item.value}</span>
              </div>
            </li>
          ))}
        </ul>
      </Fragment>
    )
  }
}