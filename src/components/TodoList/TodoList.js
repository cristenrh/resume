import { Component } from 'react';
import React from 'react';
import './TodoList.css';


/*
  ------ READ BEFORE YOU BEGIN ------

  In order to begin this challenge, you must first:
   - Have a Codepen account (signup is free) and be logged in
   - Fork this pen (Fork option is in footer of this window)
   
  To submit your work:
   - Make sure to save your work (use the 'Save' button)!
   - Email the link to your forked pen to talent@ender.com


   --------- THE CHALLENGE ---------
  
  Build a todo list application.
  
  Modify the existing React Components to complete the following:
  
  1. Display completed and unfinished todos separately.
  2. Clicking on the name of a todo should toggle its completed status.
  3. Clicking on the "X" button of a single todo should delete that todo entirely.
  4. The todo form should be able to create a new todo
     and add it to the list of todos.
     
  NOTE:
  You should only modify the contents of this JS panel - NOT the
  HTML or CSS panels.
*/


// use "generateId()" function to create a unique id


function TodoForm(props) {
  return (
    <form className="create-todo-form">
      <h2>Create a New Todo</h2>
      <input
        name="todo-name"
        id="todoName"
        type="text"
        placeholder="Enter todo description"
        autoComplete="off"
      />
      <button type="submit">Create Todo</button>
    </form>
  );
}

function TodoListItem(props) {
  const { name, id } = props;
  // toggle item's completed status on name click.
  // delete item on "X" click.
  return (
    <div className="todo-list__item">
      <span>{name}</span>
      <button>X</button>
    </div>
  );
}

function TaskList(props) {
  return (
    <div className="todo-list">
      <h2>{props.title}:</h2>
      {
        // show todo list items here
      }
    </div>
  );
}

function TodoList() {


    return (
      <div className="App" initialTodos={todos}>
        <div className="content">
              <h1 className="title">Todo App</h1>
                <TodoForm />
                <div className="lists-wrapper">
                <TaskList todos={[]} title="Todo" />
                <TodoListItem />
               
               
                  <TaskList todos={[]} title="Completed" />
                  <TodoListItem />
                
         
                </div>
              </div>
      </div>
    )

    }

    const todos = [
        {
          id: "asdfv",
          name: "Practice Guitar",
          isCompleted: false
        },
        {
          id: "gsdfw",
          name: "Take out Recycling",
          isCompleted: false
        },
        {
          id: "23gsd",
          name: "Exercise",
          isCompleted: false
        },
        {
          id: "6ghsd",
          name: "Buy Groceries",
          isCompleted: false
        },
        {
          id: "dfg83",
          name: "Send Birthdy Cards",
          isCompleted: true
        },
        {
          id: "y84cd",
          name: "Sweep Porch",
          isCompleted: true
        }
      ]
   

//   createTodo(name) {
//     // create todo here
//   }

//   deleteTodo(id) {
//     // delete todo here
//   }

//   toggleTodo(id) {

//   }





//}
export default TodoList;
