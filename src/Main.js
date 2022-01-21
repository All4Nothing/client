import axios from "axios";
import React from "react";

function Main(props) {

    const onLogout = () => {
        axios.post('http://127.0.0.1:8000/api/auth/logout/', {
            withCredentials : true
        })
            .then(res => console.log(res))
            .catch(error => console.dir(error))
        document.location.href = '/'
    }

    return (
        <div>
            <div>
                <h2>Main 페이지</h2>
            </div>
            <div>
                <button type='button' onClick={onLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Main;