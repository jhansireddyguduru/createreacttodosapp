import React, {Component} from 'react';
import Header from './components/layout/header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

class App extends Component {
  state = {
    reminders: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }
  markComplete = (id) => {
    console.log("HI from app",id)
    this.setState({reminders: this.state.reminders.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
  delTodo = (id) => {
    console.log("delete from app",id)
    this.setState({reminders: [...this.state.reminders.filter(todo => todo.id !== id)]
    
    });
  }
  render() {
    //console.log(this.state.todos);
  return (
    <div className='App'>
      <div className='container'>
      <Header />
      <AddTodo />
      <Todos reminders={this.state.reminders} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
      
    
    </div>
  );
}
}

export default App;
