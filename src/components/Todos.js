import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    
 render() {
    console.log(this.props.reminders);
  return this.props.reminders.map( (todo) => (
      <TodoItem key = {todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}></TodoItem>
  ));
  }
}

//PropTypes
Todos.propTypes = {
    reminders: PropTypes.array.isRequired
}
export default Todos;