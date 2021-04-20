import "./App.css";
import Weather2 from "./Weather2";
import User2 from "./User2";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import { ThemeProvider } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import { lightGreen } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: "#76ff03",
    },
  },
});

function App() {
  const res = 10 * 30;
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <NavBar />
          <header className="App-header">
            <Switch>
              <Route path="/Weather/:id">
                <Weather2 />
              </Route>
              <Route path="/Weather">
                <Weather2 />
              </Route>
              <Route path="/">
                <User2 />
              </Route>
            </Switch>
          </header>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
