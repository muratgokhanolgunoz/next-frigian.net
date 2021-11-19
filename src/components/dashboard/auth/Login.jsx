/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import React, { useState, useContext, useEffect } from "react";
import { showToast } from "../../../../_core/functions";
import AuthContext from "../../../../_store/AuthContext";
import { getToken } from "../../../../_services/AuthService";
import style from "../../../../styles/Login.module.scss";
import { useRouter } from "next/router";

const Login = () => {
    const authContext = useContext(AuthContext);
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (authContext.token !== "") {
            router.push("/sarici2021");
        }
    }, []);

    const handleLogin = (_e) => {
        _e.preventDefault();

        const payload = new FormData();
        payload.append("email", email);
        payload.append("password", password);
        payload.append("captcha", "");
        payload.append("secondid", "");

        getToken(payload)
            .then((response) => {
                if (response.status === 200) {
                    authContext.funcSetToken(response.data.token);
                } else {
                    showToast(
                        "top-right",
                        "Authentication failed",
                        "error",
                        10000
                    );
                }
            })
            .catch((response) => {
                console.warn(response);
                showToast("top-right", response, "API ERROR", 10000);
            });
    };

    return (
        <div className={style.login}>
            <img
                id="login-form-img"
                src="../assets/img/frigian-dark.png"
                alt=""
            ></img>

            <form
                id="login-form"
                method="post"
                onSubmit={(e) => handleLogin(e)}
            >
                <div className={style.loginFormRow}>
                    <label htmlFor="login-form-username">eMail</label>
                    <input
                        id="login-form-username"
                        name="login-form-username"
                        type="text"
                        className="login-form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={style.loginFormRow}>
                    <label htmlFor="login-form-password">Password</label>
                    <input
                        id="login-form-password"
                        name="login-form-password"
                        type="password"
                        className="login-form-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={style.loginFormRow}>
                    <button
                        id="login-form-submit"
                        className="login-form-submit"
                        type="submit"
                    >
                        LOGIN
                    </button>
                </div>
            </form>
        </div>
    );
};
export default Login;
