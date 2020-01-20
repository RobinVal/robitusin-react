import React, { useContext, useState } from 'react';
//import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { AuthContext } from '../context/auth';
import { useForm } from '../util/hooks';

function Register(props) {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(
      _,
      {
        data: { register: userData }
      }
    ) {
      context.login(userData);
      props.history.push('/profile');
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values
  });

  function registerUser() {
    addUser();
  }

  return (
    <div className="limiter">                
                <div className="container-login100">
                   <div className="login100-more"></div>  
                   
                        <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">   
                            <form className="login100-form validate-form" onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
                                <span className="login100-form-title p-b-59">
                                    Sign Up
                                </span> 
                                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                    <span className="label-input100">Email</span>
                                    <input className="input100" type="email" name="email" placeholder="Email addess..." value={values.email} error={errors.email ? true : false} onChange={onChange} required />
                                    <span className="focus-input100"></span>
                                </div>
                                <div id="like_button_container"></div>
                                <div className="wrap-input100 validate-input" data-validate="Username is required">
                                    <span className="label-input100">Username</span>
                                    <input className="input100" type="Name" name="username" placeholder="Username..." value={values.username} error={errors.username ? true : false} onChange={onChange} required />
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Password is required">
                                    <span className="label-input100">Password</span>
                                    <input className="input100" type="password" name="password" placeholder="*************" value={values.password} error={errors.password ? true : false} onChange={onChange} required />
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Repeat Password is required">
                                    <span className="label-input100">Repeat Password</span>
                                    <input className="input100" type="password" name="confirmPassword" placeholder="*************" value={values.confirmPassword} error={errors.confirmPassword ? true : false} onChange={onChange}required />
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="flex-m w-full p-b-33">
                                    <div className="contact100-form-checkbox">
                                        <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" required />
                                        <label className="label-checkbox100" htmlFor="ckb1">
                                            <span className="txt1">
                                                I agree to the
                                        <a href="#" className="txt2 hov1">
                                                    Terms of User
                                        </a>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="container-login100-form-btn">
                                    <div className="wrap-login100-form-btn">
                                        <div className="login100-form-bgbtn"></div>
                                        <button className="login100-form-btn" type="submit" >
                                            Sign Up
                                        </button>
                                    </div>                                    
                            </div>
                        </form> 
                            {Object.keys(errors).length > 0 && (
                                <div className="ui error message">
                                  <ul className="list">
                                      {Object.values(errors).map((value) => (
                                        <li key={value}>{value}</li>
                                      ))}
                                  </ul>
                                </div>
                              )}                                                                                      
                    </div>
                </div>
            </div>
  );
}

const REGISTER_USER = gql`
  mutation register(    
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {        
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Register;
