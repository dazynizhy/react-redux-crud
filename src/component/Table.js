import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Container, Table, Form, Button, Col, Row } from 'react-bootstrap'
import List from './List'
import EditComponet from './EditComponent'

class TableUser extends Component {
    
  
    render () {
       
        return (
            <Container>
                <br/><br/>
                <Row>
                    <Col sm={2}>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Secletce ALL"  />
                    </Form.Group>
                    </Col>
                    <Col sm={2}>
                        <Button variant="secondary" size="sm">Delete</Button>
                    </Col>
                </Row>
                
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>MoBile Phome</th>
                            <th>Nationality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                  

                    {this.props.users.map((user) => (
                        user.editing ?
                        <EditComponet user={user} key={user.id} /> 
                        : <List key={user.id} user={user}/>  
                    ))}

                    </tbody>
                </Table>
            </Container>
        )
    }
}

const mapStateToprops = (state) => {
    return {
        users: state
    }
}


export default connect(mapStateToprops)(TableUser)