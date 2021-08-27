import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/user';
import { useHistory } from 'react-router-dom';

function UserProfile() {
    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <div>
            <div> <h2>Welcome <span>{user.name}</span>!</h2> </div>
            <div>
                <button
                    onClick={() => {
                        dispatch(logout())
                        history.push('/')
                    }}
                >Logout</button>
            </div>
        </div>
    )
}

export default UserProfile;