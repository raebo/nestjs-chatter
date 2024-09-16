import Auth from "./Auth";
import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

const SignUp = () => {
  return <Auth  submitLabel={"Signup"} onSubmit={async() => {}}>
    <Link to="/login" style={{alignSelf: "center" }}>
      <MuiLink>
        Login
      </MuiLink>
    </Link>
  </Auth>
}

export default SignUp;