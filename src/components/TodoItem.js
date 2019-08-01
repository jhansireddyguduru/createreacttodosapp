import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    return {
      padding: "10px",
      backgroundColor: "yellow",
      borderBottom: "1px red dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const id = this.props.todo.id;
    const title = this.props.todo.title;
    return (
      <div style={this.getStyle()}>
        <input
          type="checkBox"
          onChange={this.props.markComplete.bind(this, id)}
        />
        {title}
        <button style={buttonStyle} onClick={this.props.delTodo.bind(this, id)}>
          x
        </button>
      </div>
    );
  }
}
//proptypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};
const buttonStyle = {
  backgroundColor: "red",
  padding: "4px",
  float: "right"
};

export default TodoItem;
