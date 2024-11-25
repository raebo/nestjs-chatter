import router from "../Routes";
import client from "../../constants/apollo-client";
import { authenticatedVar } from "../../constants/authenticated";

export const  onLogout = async () => {
  authenticatedVar(false);
  router.navigate('/login')
  client.resetStore();
}

export default onLogout;