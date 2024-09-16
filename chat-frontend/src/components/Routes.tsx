import {createBrowserRouter} from "react-router-dom";
import Login from "./auth/Login";
import SignUp    from "./auth/Signup";

// @ts-ignore
const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp/>
    }
])

export default router;