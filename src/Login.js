import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./Login.module.css";

function Login() {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    const handleInputId = (event) => { //event: React.ChangeEvent
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

    const onClickLogin = async () => {
        try {
            console.log('click login')
            console.log('ID : ', inputId)
            console.log('PW : ', inputPw)
            const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
                'username': inputId,
                'password': inputPw
            })
            if (response.status === 200) {
                console.log(response)
                document.location.href = '/'
            }
        } catch (error) {
            console.dir(error)
        }
    }


    return(
        <div>
            <h1 className={styles.Title}>Login</h1>
            <div>
                <label className = {styles.Label}htmlFor="input_id">ID:</label>
                <input className = {styles.Input} type = "text" id = "input_id" value = {inputId} onChange = {handleInputId} />
                
            </div>
            <div>
                <label className = {styles.Label}htmlFor="input_pw">PassWord:</label>
                <input className = {styles.Input} type = "password" id = "input_pw" value = {inputPw} onChange = {handleInputPw} onKeyPress = {handleKeyPress} />    
                
            </div>
            <div>
                <button className={styles.Button} type="button" onClick={onClickLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login;