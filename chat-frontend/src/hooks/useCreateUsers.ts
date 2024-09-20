import { gql, useMutation } from "@apollo/client";
import { User } from "../models/User";
import { useState } from "react";

interface CreateUserInput {
  createUserInput: {
    email: string;
    password: string;
  }
}

const CREATE_USER = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
    }
  }
`

const useCreateUsers = () => {
  const [error, setError] = useState<boolean>();
  
  return useMutation<User, CreateUserInput>(CREATE_USER)
}

export { useCreateUsers };