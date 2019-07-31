import React from 'react';

function App() {
  const todoList = [
    {
      id: "1",
      taskName: "training"
    },
    {
      id: "2",
      taskName: "seetharam"
    },
    {
      id: "3",
      taskName: "gym"
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
      todoList
      {document.write(todoList.forEach)}
      </header>
    </div>
  );
}

export default App;
