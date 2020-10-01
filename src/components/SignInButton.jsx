import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignInButton = ()  => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
        <button onClick={() => loginWithRedirect()}> Sign In / Sign Up
        </button>
        )
    );
};

export default SignInButton;