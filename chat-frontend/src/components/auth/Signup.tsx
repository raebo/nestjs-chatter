import Auth from "./Auth";
import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import { useCreateUsers } from "../../hooks/useCreateUsers";

const SignUp = () => {
  const [createUser] = useCreateUsers();

  return <Auth  submitLabel={"Signup"} onSubmit= {async ({ email, password }) => {
    await createUser({
      variables: {
        createUserInput: {
          email,
          password
        }
      }
    })
  }}>
    <Link to="/login" style={{alignSelf: "center" }}>
      <MuiLink>
        Login
      </MuiLink>
    </Link>
  </Auth>
}

export default SignUp;