import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./Main.module.css"

function Main({
    user
}) {

    console.log(user)

    const onLogout = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/logout/', {
                withCredentials: true
            })
            console.log(response)
        } catch (error) {
            console.dir(error)
        }
        document.location.href = '/'
    }

    return (
        <div>
            <div>
                <h2 className={styles.Title}>Main 페이지</h2>
                <li className={styles.List}>{user.username}</li>
                <li className={styles.List}>{user.email}</li>
            </div>
            <div>
                <button className={styles.Button} type='button' onClick={onLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Main;