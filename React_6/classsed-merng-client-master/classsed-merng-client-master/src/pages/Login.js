import React, { useContext, useState } from 'react';
//import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { AuthContext } from '../context/auth';
import { useForm } from '../util/hooks';


function Login(props) {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  
  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: '',
    password: ''
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(
      _,
      {
        data: { login: userData }
      }
    ) {
      context.login(userData);
      props.history.push('/');
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values
  });

  function loginUserCallback() {
    loginUser();
  }

  return (
    <div className="limiter">                
                <div className="container-login100">
                   <div className="login100-more"></div>  
                        <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">   
                            <form className="login100-form validate-form" onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
                                <span className="login100-form-title p-b-59">
                                    Sign In
                                </span>   
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
                                <div className="container-login100-form-btn">
                                    <div className="wrap-login100-form-btn">
                                        <div className="login100-form-bgbtn"></div>
                                        <button className="login100-form-btn" type="submit" >
                                            Sign In
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

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Login;
