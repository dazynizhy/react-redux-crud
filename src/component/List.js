import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Button, ButtonGroup, Form} from 'react-bootstrap'

class List extends Component {
    
    
    state = {
        checkedItems: new Map(),
    }

    handleDelete = (e,id) => {
        e.preventDefault()
        this.props.dispatch({type:'DELETE_USER' , id})
        console.log('delete')
    }

    handleUpdate = (e,id) => {
        e.preventDefault()
        this.props.dispatch({type:'EDIT_USER' , id})
        console.log('Update')
    }

    handleDeleteGroup = (e,id) => {
        //event.preventDefault()
        //console.log(event)
        //this.props.dispatch({type:'CHECK_USER_DELETE' , id})
        console.log('checked')
    }

    render () {
        return (
            <tr>
                <td> 
                <Form.Group controlId={'check' + this.props.user.id }>
                    <Form.Check type="checkbox" name={this.props.user.firstName} onChange={(e) => this.handleDelete(e,this.props.user.id)}  label={this.props.user.firstName + ' ' +  this.props.user.lastName} />
                </Form.Group>
                </td>
                <td>{this.props.user.gender}</td>
                <td>{this.props.user.mobileZone + '' + this.props.user.mobileNumber}</td>
                <td>{this.props.user.nationality}</td>
                <td>
                <ButtonGroup toggle>
                    <Button size="md"
                        // onClick={(e)=> this.props.dispatch({type:'EDIT_USER' , id: this.props.user.id})}
                        onClick={(e) => this.handleUpdate(e,this.props.user.id)}
                    >   
                        Edit
                    </Button>
                    <Button variant="secondary" size="md"
                        // onClick={(e)=> this.props.dispatch({type:'DELETE_USER' , id: this.props.user.id})}
                        onClick={(e) => this.handleDelete(e,this.props.user.id)}
                    >
                        Delete
                    </Button>
                </ButtonGroup>
                </td>
            </tr>
        )
    }
}

export default connect()(List)