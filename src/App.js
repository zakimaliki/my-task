import React from 'react';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import EditModal from './components/EditModal';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  
state ={
  todos:[
    {
      id : 1,
      title : "reading a book"
    },
    {
      id : 2,
      title : "workout training"
    },
  ],
  isEdit: false,
  isDelete: false,
  editData: {
    id : "",
    title : ""
  },
  deleteData: {
    id : ""  
  }
}

update = () => {
   const { id , title } = this.state.editData
   const newData = { id , title}
   const newTodos = this.state.todos
   newTodos.splice((id-1), 1, newData)
   this.setState({
      todos: newTodos,
      isEdit: false,
      editData: {
        id : "",
        title : ""
      }
   })
}

setTitle = e => {
  this.setState({
    editData: {
      ...this.state.editData,
      title : e.target.value
    }
  })
}

openModal = (id , data) => {
  this.setState({
    isEdit : true,
    editData : {
       id,
       title: data
    }
  })
}

closeModal = () => {
  this.setState({
    isEdit : false
  })
}

openModalDelete = ( id ) => {
  this.setState({
    isDelete : true,
    deleteData : {
      id   
    }
  })
}

closeModalDelete = () => {
  this.setState({
    isDelete : false
  })
}

deleteTask = id => {
  this.setState({
    isDelete: false,
    todos : this.state.todos.filter(item => item.id !== id)
  })
}

addTask = data => {
  const id = this.state.todos.length
  const newData = {
    id : id + 1,
    title : data
  }
  this.setState({
    todos : [ ...this.state.todos, newData]
  })
} 

render(){
    const { todos } = this.state;
    return (
        <div className='app'>
          <div className='logo'>
            <img src={logo} alt='logo'/>
            <h3>Task List</h3>
          </div>
          <div className='list'>
            {todos.map(item => 
              <TodoItem 
                key={item.id} 
                todo={item} 
                del={this.deleteTask}
                open={this.openModal}
                openDel={this.openModalDelete}
              />
            )}
          </div>
          <div className='input-form'>
            <FormInput add={this.addTask}/>
          </div>
          <EditModal 
            edit={this.state.isEdit} 
            hapus={this.state.isDelete}
            close={this.closeModal} 
            closeDel={this.closeModalDelete} 
            change={this.setTitle}
            data={this.state.editData}
            dataDel={this.state.deleteData}
            update={this.update}
            del={this.deleteTask}
          />
        </div>

      );
}
}

export default App;
