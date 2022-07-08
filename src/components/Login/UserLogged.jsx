import React from 'react'
import { useNavigate } from 'react-router-dom';

const UserLogged = () => {
  const navigate = useNavigate();

    const logout = () => {
        localStorage.setItem("token", "");
        localStorage.setItem("userName", "");
        navigate("/login");
    }

    return (
        <div className="login-container">
            <div className="main-container">
                <div className="login user-info">
                    <b>{localStorage.getItem("userName")}</b>
                    <button onClick={logout}>
                        Log out
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserLogged