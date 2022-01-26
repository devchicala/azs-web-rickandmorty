import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
