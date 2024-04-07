import React, { useState } from "react";
import axios from "axios";
import {redirect} from "next/navigation";
import {router} from "next/client";
import {useRouter} from "next/router";

const App = () => {
    const [data, setData] = useState({
        domain: "",
        password: ""
    });

    const router = useRouter()

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            domain: data.domain,
            password: data.password
        };
        //const jsonData = JSON.stringify(userData);
        axios.post("http://localhost:4000/tracks", userData).then(resp => router.push('/admin')).catch(e => console.log(e));

    };

    return (
        <div>
            <h1>Login Account</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="domain">
                    Email
                    <input
                        type="text"
                        name="domain"
                        value={data.domain}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="password">
                    Password
                    <input
                        type="text"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default App;
