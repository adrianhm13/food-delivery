import { ThemeProvider } from "@mui/material/styles";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import { theme } from "./theme/theme";
import "./App.css";
import Layout from "./components/Layout";

//Pages
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Menu from "./pages/menu";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
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
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
