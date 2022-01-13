import { ThemeProvider } from "@mui/material/styles";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
// import { CartContextProvider } from "./context/CartContext";

import { theme } from "./theme/theme";
import "./App.css";
import Layout from "./components/Layout";

//Pages
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Menu from "./pages/menu";

function App() {
  const { authIsReady } = useAuthContext();

  return (
    <ThemeProvider theme={theme}>
      {/* <CartContextProvider> */}
      {authIsReady && (
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/menu">
                <Menu />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      )}
      {/* </CartContextProvider> */}
    </ThemeProvider>
  );
}

export default App;
