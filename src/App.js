import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Login from './Login';
import Main from './Main';
import Cookies from 'js-cookie';

function App () {
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        const setAxiosInstance = () => {
            try {
              const token = Cookies.get('csrftoken');
              axios.defaults.headers.common['X-CSRFToken'] = token;
              axios.defaults.withCredentials = true
            } catch (err) {
              console.dir(err);
            }
          }
        setAxiosInstance()

        axios.get('http://127.0.0.1:8000/api/auth/me/', {
            withCredentials : true
        })
            .then(res => {
                if (res.status === 200) {
                    setIsLogin(true)
                    console.log('isLogin ?? ::', isLogin)
                console.log(res)
                } 
            })
            .catch(error => console.dir(error))        
        
        
    },[])

    return (
        <div>
            {isLogin ?
                <Main isLogin={isLogin} /> :
                <Login />}
        </div>
    )
}

export default App;