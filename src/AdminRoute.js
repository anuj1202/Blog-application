import React, { useContext } from "react"
import { Redirect, Route } from 'react-router'
import { Admin } from "./pages/admin/Admin";
import { Context } from "./context/Context"


export default function AdminRoute() {
    const { user } = useContext(Context)

    return (
        <Route
          render={({location}) =>
            user && user.username == "Admin"  ? (
              <Admin/>
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
}
