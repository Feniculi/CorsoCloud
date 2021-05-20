import { Chat } from './components/Chat';
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


const defaultTheme = createTheme();

export default function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
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


