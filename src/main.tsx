import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { SignupEmailContextProvider } from "./contexts/SignupEmailContext.tsx";
import { UserContextProvider } from "./contexts/UserContext.tsx";
import { LocalStorageTokenContextProvider } from "./contexts/LocalStorageTokenContext.tsx";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <SignupEmailContextProvider>
        <LocalStorageTokenContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </LocalStorageTokenContextProvider>
      </SignupEmailContextProvider>
    </HashRouter>
  </React.StrictMode>
);
