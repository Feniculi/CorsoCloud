import React from "react";
import { Route, Redirect } from "react-router-dom"

import { useAuthState } from 'react-firebase-hooks/auth'
import { firebase } from 'helpers/firebaseProvider'

const PrivateRoute = ({ component: RouteComponent }) => {
    const [user] = useAuthState(firebase.auth())

    return (
        <Route
            render={(props) =>
                user ? (
                    <RouteComponent {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login"
                        }}
                    />
                )
            }
        />
    );

};

export default PrivateRoute