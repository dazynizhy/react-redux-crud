import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Container, Table, Form, Button, Col, Row, Pagination } from 'react-bootstrap'
import List from './List'
import EditComponet from './EditComponent'

class TableUser extends Component {
    
    state = {
        list : null,
        dataUser : null,
        page : 1
    }
    
    handlePage = (e,page) => {
        e.preventDefault()
        console.log('page',page)
        console.log('ddd',this.state.list)
        let data = this.state.list[page]
        this.setState({
            dataUser : data,
            page
        })
    }

    componentDidMount = () => {
        let count = 1
        let listUser = []
        let temp = []
        this.props.users.map((e,i) => {
            temp.push(e)
            if((i+1) % 2 === 0){
                listUser[count] = temp
                temp = []
                count++
            }
        })
        listUser[count] = temp
       
        this.setState({
            list: listUser ,
            dataUser : listUser[1]
        })

        console.log('ALL' ,listUser)
    }
  
    render () {
        console.log('ff', this.props.users.length)
        const countPage = Math.ceil(this.props.users.length / 2 )
        console.log('countPage',countPage)
        const nextPage = this.state.page + 1 >= countPage ? countPage : this.state.page + 1
        console.log('nextPage',nextPage)
        const prevPage = this.state.page - 1 === 0 ?  1 : this.state.page - 1
        console.log('prevPage',prevPage)
        console.log(countPage)
        console.log('2',this.state.dataUser)
       
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
                    {/* <Col sm={8}>
                        <Pagination className="p-right">
                            <Pagination.Prev onClick={(e) => this.handlePage(e,prevPage)}/>
                            {(() => {
                                const options = []
                                for (let i = 1; i <= countPage ; i++) {
                                    options.push(<Pagination.Item active={i === this.state.page ? true : false} key={i} onClick={(e) => this.handlePage(e,i)}>{i}</Pagination.Item>);
                                }
                                return options
                            })()}
                            <Pagination.Next onClick={(e) => this.handlePage(e,nextPage)}/>
                        </Pagination>
                    </Col> */}
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
                    {   
                        this.state.dataUser !== null ?
                        <tbody>
                            {this.props.users.map((user) => (
                                user.editing ?
                                <EditComponet user={user} key={user.id} /> 
                                : <List key={user.id} user={user}/>  
                            ))}
                        </tbody> : 
                        <tbody> 
                            <tr>
                                <td>ไม่มีข้อมูล</td>
                            </tr>
                        </tbody>
                    }
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