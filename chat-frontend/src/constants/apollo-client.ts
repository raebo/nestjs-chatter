import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { API_URL } from "./url";
import excludedRoutes from "./excluded-routes";
import router from "../components/Routes";
import { onLogout } from "../utils/logout";


const logoutLink = onError((error) => {
  let _error = error.graphQLErrors?.[0];
  if (
    (_error?.extensions?.originalError as any).statusCode === 401
  ) {
    if (!excludedRoutes.includes(window.location.pathname)) {
      onLogout()
    }
  }
})

const httpLink = new HttpLink({ uri: `${API_URL}/graphql` })

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: logoutLink.concat(httpLink)
})

export default client;