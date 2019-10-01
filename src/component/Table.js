import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Container, Table, Form, Button, Col, Row, Pagination } from 'react-bootstrap'
import List from './List'
import EditComponet from './EditComponent'

class TableUser extends Component {
    
    handlePage = (event) => {
        event.preventDefault()
        console.log('tets')
        console.log(this.props.users)
        
    }
  
    render () {
    
       
        const countPage = this.props.users.length / 3 
        console.log(countPage)
       
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
                    <Col sm={8}>
                       
                        <Pagination className="p-right">
                            <Pagination.Prev />
                            {(() => {
                                const options = []
                                for (let i = 1; i <= countPage ; i++) {
                                    options.push(<Pagination.Item onClick={this.handlePage}>{i}</Pagination.Item>);
                                }
                                return options
                            })()}
                            {/* <Pagination.Item active>{12}</Pagination.Item> */}
                            <Pagination.Next />
                        </Pagination>
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