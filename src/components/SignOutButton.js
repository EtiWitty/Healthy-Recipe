import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignOutButton = () => {
    const { signout } = useAuth0();

    return (
        <button onClick={() => signout( {returnTo: window.location.origin} )}>
            Sign Out
        </button>
    );
};

export default SignOutButton;