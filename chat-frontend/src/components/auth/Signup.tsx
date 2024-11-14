import Auth from "./Auth";
import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import { useCreateUsers } from "../../hooks/useCreateUsers";
import { useState } from "react";
import { extractErrorMessage } from "../utils/errors";

const SignUp = () => {
  const [createUser] = useCreateUsers();
  const [error, setError] = useState("");

  return (
    <>
      <Auth
        submitLabel={"Signup"}
        error={error}
        onSubmit= {async ({ email, password }) => {
          try {
            await createUser({
              variables: {
                createUserInput: {
                  email,
                  password
                }
              }
            });
            setError("")
          } catch (err) {
            console.log("error is is included")
            const errorMessage = extractErrorMessage(err);
            if (errorMessage) {
              setError(errorMessage)
              return;
            }
            setError("An unknown error occurred.")

          }
      }}>
        <Link to="/login" style={{alignSelf: "center" }}>
          <MuiLink>
            Login
          </MuiLink>
        </Link>
      </Auth>
    </>
  )
}

export default SignUp;