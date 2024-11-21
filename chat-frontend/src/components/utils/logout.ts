import router from "../Routes";
import client from "../../constants/apollo-client";

export const  onLogout = async () => {
  router.navigate('/login')
  client.resetStore();
}

export default onLogout;