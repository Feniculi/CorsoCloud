import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Link
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Landing from 'pages/Landing';
import { NavBar } from 'components/NavBar';
import { Contacts } from 'pages/Contacts';
import { ChatFab } from 'components/ChatFab';
import PrivateRoute from "components/PrivateRoute";
import { Login } from "pages/Login";


const defaultTheme = createTheme();

export default function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <NavBar />

        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" exact component={Landing} />
          <Route path="/contattaci">
            <Contacts />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <ChatFab />
      </Router>
    </ThemeProvider>
  )
}


function NoMatch() {
  let location = useLocation();

  return (
    <div style={{ width: '100vmax', textAlign: 'center' }}>
      <h1>
        404 pagina <code>{location.pathname}</code> non trovata
      </h1>
      <Link to="/">
        Torna alla home
      </Link>
    </div>
  );
}


