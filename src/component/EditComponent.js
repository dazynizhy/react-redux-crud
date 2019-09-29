import React, { Component } from 'react'
import {connect} from 'react-redux'

class EditComponent extends Component {
   
    handleSubmit = (e) => {
        e.preventDefault()
        const newFirstname = this.firstName.value
        const newLastname = this.lastName.value

        const data = {
            newFirstname,
            newLastname,
        }
        this.props.dispatch({
            type: 'UPDATE',
            id:this.props.user.id,
            data
        })

        console.log(data)
    }

    render () {
        return (
            <tr>
                <td colSpan="5"> 
                    <form onSubmit={this.handleSubmit}>
                        <input required type="text" placeholder="FirsftName" ref={(input)=> this.firstName = input} defaultValue={this.props.user.firstName}/><br /><br/>
                        <input required type="text" placeholder="LastName" ref={(input)=> this.lastName = input} defaultValue={this.props.user.lastName}/><br /><br/>
                        <button>Update</button>
                    </form>
                </td>
            </tr>
        )
    }
}

export default connect()(EditComponent)