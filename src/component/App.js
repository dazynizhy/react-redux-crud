import React, { Component } from 'react'
import UserForm from './UserForm'
import Table from './Table'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
      return (
        <div className="App">
           <UserForm />
           <Table />
        </div>
      )
  }
}


export default App;
