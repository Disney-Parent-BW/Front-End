import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
    Wrapper, 
    Form, 
    Input, 
    Button, 
    Container,
    SubTitle,
    NavLink,
    Header
    } from '../styles/RegistrationStyles'; 


const Registration = props => {
    const [userRegistration, setUserRegistration] = useState({});
    const { register, handleSubmit, errors } = useForm();

    // state = {
    //     credentials: {
    //         username: '',
    //         email: '',
    //         password: '',
    //         role: '',
    //     }
    // }; 

    const onSubmit = async data => {
        
        setUserRegistration({
            'username': data.username,
            'email': data.email,
            'password': data.password,
            'role': data.email
        })
    }

    // handleChange = event => {    
    //     this.setState ({
    //         credentials: {
    //             ...this.state.credentials,
    //             [event.target.name]: event.target.value
    //         }
    //     });
    // };

    const history = useHistory();

    useEffect(() => {
        axiosWithAuth()
            .post("api/auth/register", userRegistration)
            .then(response => {
                console.log("user registration response", response.data);
                history.push('/dashboard');
            })
            .catch(error => console.log(error));
    }, [history, userRegistration]);
    
    // login = event => {
        
    //     event.preventDefault();
    //     axiosWithAuth()
    //         .post('/api/auth/register', this.state.credentials)
    //         .then(response => {
    //             console.log(response.data)
    //             localStorage.setItem('token', response.data.token);
    //             localStorage.setItem('email', response.data.created_user.email);       
    //             history.push('/dashboard');
    //             this.setState ({ credentials: {
    //                 username: '',
    //                 email: '',
    //                 password: '',
    //                 role: ''
    //             }});
    //         })
    //             .catch (error => console.log (error));
    // };

        
        return (
            
            <Wrapper>
                <Form onSubmit = {handleSubmit(onSubmit)}>
                    <Header><h3>Disney Parent Registration </h3></Header>
                    
                    <Input
                        type = 'text'
                        name = 'username'
                        placeholder = '* name'
                        ref={register({required: true})}
                        />
                        {errors.username && 'A username is required.'}
                        <br></br>

                    <Input
                        type = 'text'
                        name = 'role'
                        ref={register({required: true})}
                        placeholder = '* account type'
                        />
                        {errors.role && 'A role is required.'}
                        <br></br>

                    <Input
                        type = 'text'
                        name = 'email'
                        ref={register({required: true})}
                        placeholder = '* email'
                        />
                        {errors.email && 'A email is required.'}
                        <br></br>

                    <Input
                        type = 'password'
                        name = 'password'
                        ref={register({required: true})}
                        placeholder = '* password'
                        />
                        {errors.password && 'A password is required.'}
                        <br></br>

                    <Button 
                        type = 'submit'
                        >Register
                    </Button>

                    <Container>
                        <SubTitle>Already registered? Click <Link to='/logon'><NavLink>here</NavLink></Link> to login</SubTitle>
                    </Container>    
                </Form>
            </Wrapper>
        );
    
}

export default Registration;