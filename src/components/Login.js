import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { login } from '../features/user';


function Login() {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const checkUser = response => {
        if (response.data.user_name === userName) {
            dispatch(login({ name: userName }));
            history.push('./user/profile');
        }
    }

    return (
        <div>

            <div>
                <h1>USER LOGIN</h1>
            </div>
            <div>
                <span>Username</span>
            </div>
            <div>
                <input
                    type="text"
                    onChange={(event) => {
                        setUserName(event.target.value);
                    }}
                />
            </div>
            <div>
                <span>Password</span>
            </div>
            <div>
                <input
                    type="password"
                    onChange={(event) => {
                        setUserPassword(event.target.value);
                    }}
                />
            </div>
            <div>
                <button onClick={() => {
                    //user login validation
                    axios.post(`http://localhost:5000/sign-in`, {
                        userName: userName,
                        userPassword: userPassword,
                    })
                        .then(response => {
                            checkUser(response);

                        })
                        .catch((error) => { console.log(error) });
                }}>Login</button>
            </div>

        </div>
    )
}

export default Login;