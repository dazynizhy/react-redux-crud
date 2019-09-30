import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Container, Button, Form, Col, Row } from 'react-bootstrap'
import { DatePickerInput } from 'rc-datepicker';

import 'rc-datepicker/lib/style.css';


const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

class UserForm extends Component {
    state = {
        valid: null,
        CountSubmit: 0,
        data: {
            id: new Date(),
            editing: false,
            titleName: null,
            firstName: null,
            lastName: null,
            nationality: null ,
            citizenID: null,
            mobileZone: '+66',
            mobileNumber: null,
            gender: 'Male',
            passportNo: null,
            salary: null,
            datePickerInputDate: null,
        },
        datePickerDate: '2015-05-13',
        showInput: true,
        errors: {
            firstName: '',
            lastName: '',
            mobilePhone: '',
            email: '',
            password: '',
            isEmptyTitlename: false,
            isEmptyFristname: false,
            isEmptyLastname: false,
            isEmptyBirthday: false,
            isEmptyZone: false,
            isEmptyMobile: false,
            isEmptySalary: false,
        },

    }

    //set date picker
    onClear = () => this.setState({ datePickerDate: null })
    log = (...x) => console.log(...x) // eslint-disable-line no-console
    onChange = (date) => {
        this.setState({
			selectedDate: date
		});
    } 
    

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target; //, type, checked
        //console.log(type + '|' + value + '|' + checked)
        if(name !== 'mobileNumber'
            && name !== 'salary'
            && name !== 'passportNo'
            && name !== 'citizenID'
        ){
            this.setState(prevState => ({
                data: {                   
                    ...prevState.data,    
                    [name] :   value  
                }
            }))
        }
        const re = /^[0-9\b]+$/;
        let errors = this.state.errors;
        switch (name) {
            case 'citizenID': 
                if( value === '' || re.test(value) ){
                    this.setState(prevState => ({
                        data: {                   
                            ...prevState.data,    
                            citizenID :  value  
                        }
                    }))
                }
                break;
            case 'passportNo': 
                if( value === '' || re.test(value) ){
                    this.setState(prevState => ({
                        data: {                   
                            ...prevState.data,    
                            passportNo :  value  
                        }
                    }))
                }
                break;
            case 'salary': 
                if( value === '' || re.test(value) ){
                    this.setState(prevState => ({
                        data: {                   
                            ...prevState.data,    
                            salary :  value  
                        }
                    }))
                }
                break;
            case 'mobileNumber': 
                if(value === '' || re.test(value) ){
                    this.setState(prevState => ({
                        data: {                   
                            ...prevState.data,    
                            mobileNumber :   value  
                        }
                    }))
                }
                break;
            case 'firstName': 
                errors.firstName = 
                    value.length < 3
                    ? 'firstName must be 3 characters long!'
                    : '';
                break;
            case 'lastName': 
                errors.lastName = 
                value.length < 3
                    ? 'lastName must be 3 characters long!'
                    : '';
                break;
          default:
            break;
        }
      
        this.setState({errors, [name]: value}, ()=> {
            //console.log(errors)
        })
      }

    handleSubmitValidate = (event) => {
        event.preventDefault();
        if(this.state.data.titleName === null || this.state.data.titleName === ''){
            this.setState(prevState => ({
                errors: {                   
                    ...prevState.errors,    
                    isEmptyTitlename : true
                }
            }))
           
        }else{
            this.setState(prevState => ({
                errors: {                   
                    ...prevState.errors,    
                    isEmptyTitlename : false
                }
            }))
        }
        if(this.state.data.firstName == null || this.state.data.firstName === ''){
            this.setState(prevState => ({
                errors: {                   
                    ...prevState.errors,    
                    isEmptyFristname : true 
                }
            }))
        }else{
            this.setState(prevState => ({
                errors: {                   
                    ...prevState.errors,    
                    isEmptyFristname : false 
                }
            }))
        }
        if(this.state.data.lastName == null || this.state.data.lastName === ''){
            this.setState(prevState => ({
                errors: {                   
                    ...prevState.errors,    
                    isEmptyLastname : true  
                }
            }))
          
        }else{
            this.setState(prevState => ({
                errors: {                   
                    ...prevState.errors,    
                    isEmptyLastname : false  
                }
            }))
        }
        if(this.state.data.mobileZone == null || this.state.data.mobileZone === ''){
            this.setState(prevState => ({
                errors: {                   
                    ...prevState.errors,    
                    isEmptyZone : true  
                }
            }))
            
        }  else{
            this.setState(prevState => ({
                errors: {                   
                    ...prevState.errors,    
                    isEmptyZone : false  
                }
            }))
        }
        if(this.state.data.mobileNumber == null || this.state.data.mobileNumber === ''){
            this.setState(prevState => ({
                errors: {                   
                    ...prevState.errors,    
                    isEmptyMobile : true     
                }
            }))
            
        }  else{
            this.setState(prevState => ({
                errors: {                   
                    ...prevState.errors,    
                    isEmptyMobile : false     
                }
            }))
        }
        if(this.state.data.salary == null || this.state.data.salary === ''){
            this.setState(prevState => ({
                errors: {                   
                    ...prevState.errors,    
                    isEmptySalary : true  
                }
            }))
        } else{
            this.setState(prevState => ({
                errors: {                   
                    ...prevState.errors,    
                    isEmptySalary : false  
                }
            }))
        }
        if(this.state.data.datePickerInputDate == null || this.state.data.datePickerInputDate === ''){
            this.setState(prevState => ({
                errors: {                   
                    ...prevState.errors,    
                    isEmptyBirthday : true  
                }
            }))
            
        }else{
            this.setState(prevState => ({
                errors: {                   
                    ...prevState.errors,    
                    isEmptyBirthday : false  
                }
            }))
        }

        //reset id
        this.setState(prevState => ({
            data: {                   
                ...prevState.data,    
                id :  new Date()  
            }
        }))
       

        this.setState(prevState => ({
            CountSubmit: prevState.CountSubmit + 1
        }))

        if(
            this.state.data.titleName === null || this.state.data.titleName === ''
            || this.state.data.firstName == null || this.state.data.firstName === ''
            || this.state.data.lastName == null || this.state.data.lastName === ''
            || this.state.data.mobileZone == null || this.state.data.mobileZone === ''
            || this.state.data.mobileNumber == null || this.state.data.mobileNumber === ''
            || this.state.data.salary == null || this.state.data.salary === ''
            || this.state.data.datePickerInputDate == null || this.state.data.datePickerInputDate === ''
            || !validateForm(this.state.errors)
        ){
            this.setState({
                valid: false
            })
        }else{
            this.setState({
                valid: true
            })
           
        }
    }

    componentWillUpdate(nextProps, nextState) {
        // console.log('all',nextState)
        // console.log('vlll',nextState.valid)
        // console.log('Count',this.state.CountSubmit + '|' + nextState.CountSubmit)

        if(this.state.CountSubmit !== nextState.CountSubmit){
            console.log('Count',this.state.CountSubmit + '|' + nextState.CountSubmit)

            if(validateForm(nextState.errors) && nextState.valid){
                console.info('Valid Form')
                this.props.dispatch({
                    type: 'ADD_USER',
                    data : nextState.data
                })
                this.setState(prevState => ({
                    data: {                   
                        ...prevState.data,    
                        id: new Date(),
                        editing: false,
                        titleName: null,
                        firstName: null,
                        lastName: null,
                        nationality: null ,
                        citizenID: null,
                        mobileZone: '+66',
                        mobileNumber: null,
                        gender: 'Male',
                        passportNo: null,
                        salary: null,
                        datePickerInputDate: null,
                    }
                }))
            }else{
                console.info('Invalid Form')
            }
        }
    }


    render () {
        const {errors, data} = this.state;

        return (
            <div>
            <Container>
                <h1>[ Add User ]</h1><br/>
                <Form onSubmit={this.handleSubmitValidate} noValidate>
                    <Form.Group as={Row} controlId="formHorizontalTitle">
                        <Form.Label column sm={2} >
                            Title <span className="tx-red">*</span>
                        </Form.Label>
                        <Col sm={2}>
                            <Form.Control 
                                className={errors.isEmptyTitlename ? 'err-br-red' : ''}
                                as="select" 
                                name="titleName" 
                                value={data.titleName || null} 
                                onChange={this.handleChange} noValidate
                            >
                                    <option value="">กรุณาเลือก</option>
                                    <option value="Mr.">Mr.</option>
                                    <option value="Mrs.">Mrs.</option>
                                    <option value="Miss">Miss</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            Firstname <span className="tx-red">*</span>
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control type="text" className={errors.isEmptyFristname ? 'err-br-red' : ''} placeholder="Firstname" value={data.firstName || ''}  name='firstName' required onChange={this.handleChange} noValidate/>
                            {errors.firstName.length > 0 && <span className='error tx-red'>{errors.firstName}</span>}
                        </Col>
                        <Form.Label column sm={2}>
                            Lastname <span className="tx-red">*</span>
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control type="text" className={errors.isEmptyLastname ? 'err-br-red' : ''} placeholder="Lastname" name="lastName" value={data.lastName || ''} onChange={this.handleChange} noValidate/>
                            {errors.lastName.length > 0 && <span className='error tx-red'>{errors.lastName}</span>}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalBirthday">
                        <Form.Label column sm={2}>
                            Birthday <span className="tx-red">*</span>
                        </Form.Label>
                        <Col sm={4}>
                            <div className='ui input'>
                            <DatePickerInput
                                displayFormat='DD/MM/YYYY'
                                returnFormat='YYYY-MM-DD'
                                className={errors.isEmptyBirthday ? 'err-br-red my-react-component' : 'my-react-component'}
                                onChange={(jsDate, dateString) => 
                                    this.setState(prevState => ({
                                        data: {                   
                                            ...prevState.data,    
                                            datePickerInputDate :   dateString  
                                        }
                                    }))
                                }
                                onShow={this.log.bind(this, 'show')}
                                onHide={this.log.bind(this, 'hide')}
                                showOnInputClick
                                placeholder='placeholder'
                                locale='de'
                                onClear={this.onClear}
                                name="birthDay"
                                />
                            </div>
                            {/* <Form.Control type="password" placeholder="Password" /> */}
                        </Col>
                        <Form.Label column sm={2}>
                            Nationality
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control as="select" name="nationality" value={data.nationality || ''} onChange={this.handleChange} noValidate>
                                <option value={null}>กรุณาเลือก</option>
                                <option value="THAI">THAI</option>
                                <option value="CHINA">CHINA</option>
                                <option value="JAPAN">JAPAN</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formCritizenID">
                        <Form.Label column sm={2}>
                            CitizenID 
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control type="text" placeholder="CitizenID" value={data.citizenID || ''} name="citizenID"  onChange={this.handleChange} noValidate/>
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} controlId="formMobile">
                        <Form.Label column sm={2}>
                            Mobile phone : <span className="tx-red">*</span>
                        </Form.Label>
                        <Col sm={2}>
                            <Form.Control className={errors.isEmptyZone ? 'err-br-red' : ''} as="select" value={data.mobileZone || ''} name="mobileZone" required onChange={this.handleChange} noValidate>
                                <option value="+66" >+66</option>
                            </Form.Control>
                        </Col>
                        <Form.Label column sm={1} className="text-center">
                           -
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control 
                                type="text" 
                                className={errors.isEmptyMobile ? 'err-br-red' : ''} 
                                placeholder="" value={data.mobileNumber || ''}
                                name="mobileNumber" required 
                                onChange={this.handleChange} noValidate
                                maxlength="9"/>
                                
                        </Col>
                    </Form.Group>

                    <fieldset>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Gender
                        </Form.Label>
                        <Col sm={2}>
                            <Form.Check
                                type="radio"
                                label="Male"
                                name="gender"
                                id="formHorizontalRadios1"
                                value="Male"
                                checked={data.gender  === 'Male' }
                                onChange={this.handleChange} noValidate
                            />
                        </Col>
                        <Col sm={2}>
                            <Form.Check
                                type="radio"
                                label="Female"
                                value="Female"
                                name="gender"
                                id="formHorizontalRadios2"
                                checked={data.gender === 'Female' }
                                onChange={this.handleChange} noValidate
                            />
                        </Col>
                        <Col sm={2}>
                            <Form.Check
                                type="radio"
                                label="Unisex"
                                value="Unisex"
                                name="gender"
                                id="formHorizontalRadios3"
                                checked={data.gender === 'Unisex'}
                                onChange={this.handleChange} noValidate
                            />
                        </Col>
                        </Form.Group>
                    </fieldset>

                    <Form.Group as={Row} controlId="formPassport">
                        <Form.Label column sm={2}>
                            Passport NO 
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control type="text" placeholder="Passprot no" value={data.passportNo || ''} name="passportNo" onChange={this.handleChange} noValidate/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formSalary">
                        <Form.Label column sm={2}>
                            Expected Salary <span className="tx-red">*</span>
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control className={errors.isEmptySalary ? 'err-br-red' : ''} type="text" placeholder="Expected Salary" name="salary" value={data.salary || ''} onChange={this.handleChange} noValidate/>
                        </Col>
                        <Form.Label column sm={2}>
                           THB
                        </Form.Label>
                    </Form.Group>
                   
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">SUBMIT</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
            </div>
        )
    }
}

export default connect()(UserForm)