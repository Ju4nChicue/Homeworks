import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Child2 = () => {

    const { setUser } = useContext(UserContext);

    const onLogin = () => {
        setUser({
            id: 123,
            name: "Juan",
            email: "juan@prueba.com"
        });
    }

    return (
        <>
            <div>Child Component 2</div>
            <button
                className="btn btn-primary"
                onClick={onLogin}
            >
                set User Info
            </button>
        </>
    )
}