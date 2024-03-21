import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { SignupEmailContextProvider } from "./context/SignupEmailContext";
import { UserContextProvider } from "./context/UserContext.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <SignupEmailContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </SignupEmailContextProvider>
    </HashRouter>
  </React.StrictMode>
);
