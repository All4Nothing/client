import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Login() {
    const [inputId, setInputId] = useState('김용주');
    const [inputPw, setInputPw] = useState('kyj130656');

    const handleInputId = (event) => {
        setInputId(event.target.value);
    }

    const handleInputPw = (event) => {
        setInputPw(event.target.value);
    }

    
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            onClickLogin();
        }
    }

    const onClickLogin = () => {
        console.log('click login')
        console.log('ID : ', inputId)
        console.log('PW : ', inputPw)    
        axios.post('http://127.0.0.1:8000/api/auth/login/', {
            'username': inputId,
            'password': inputPw
        })
            .then(res => {                
                if (res.status === 200) {
                    console.log(res)
                    document.location.href = '/'
                }})
            .catch(error => console.dir(error))
    }

    // useEffect(() => {
    //     axios.post('http://127.0.0.1:8000/api/auth/login/', {
    //         username: '김용주',
    //         password: 'kyj130656'
    //     })
    //         .then(res => {
    //             if (res.request.status === '200') {
    //                 document.location.href = '/'
    //             }})
    //         .catch(error => console.dir(error)) 
    // }, [])


    return(
        <div>
            <h1>Login</h1>
            <div>
                <label htmlFor="input_id">ID: </label>
                <input type = "text" name = "input_id" value = {inputId} onChange = {handleInputId} />
            </div>
            <div>
                <label htmlFor="input_pw">PassWord: </label>
                <input type = "password" name = "input_pw" value = {inputPw} onChange = {handleInputPw} onKeyPress = {handleKeyPress} />    
            </div>
            <div>
                <button type="button" onClick={onClickLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login;