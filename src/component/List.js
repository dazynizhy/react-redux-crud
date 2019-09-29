import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Button, ButtonGroup, Form} from 'react-bootstrap'

class List extends Component {
    render () {
        return (
            <tr>
                <td> 
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label={this.props.user.firstName + ' ' +  this.props.user.lastName} />
                </Form.Group>
                </td>
                <td>{this.props.user.gender}</td>
                <td>{this.props.user.mobileZone + '' + this.props.user.mobileNumber}</td>
                <td>{this.props.user.nationality}</td>
                <td>
                <ButtonGroup toggle>
                    <Button size="md"
                        onClick={()=> this.props.dispatch({type:'EDIT_USER' , id: this.props.user.id})}
                    >   
                        Edit
                    </Button>
                    <Button variant="secondary" size="md"
                        onClick={()=> this.props.dispatch({type:'DELETE_USER' , id: this.props.user.id})}
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