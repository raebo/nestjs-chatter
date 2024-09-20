import Auth from "./Auth";
import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const { login, error } = useLogin();
  
  return (
    <>
      <Auth  submitLabel={"Login"} onSubmit={(request) => login(request)} error={error ? "Credentials are not valid." : ""}>
        <Link to="/signup" style={{ alignSelf: 'center' }}>
          <MuiLink>
            Signup
          </MuiLink>
        </Link>
      </Auth>
    </>
  )
  
    
}

export default Login;