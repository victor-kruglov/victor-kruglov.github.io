// import logo from './logo.svg';
import './style.css';
import Container from 'react-bootstrap/Container';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import Menubar from './components/Menubar';
import Footer from './components/Footer';

import { routes } from './routes';


function App() {
  return (
    <>
      <Menubar routes={routes}/>
      <Container fluid>
        <div className='main-page'>
          <HashRouter>
          <Switch>
          {routes.map((route,key) => 
            <Route
              path={route.path} 
              component={route.component} 
              key={key} 
            />
          )}
          <Redirect from='*' to='home'/>
          </Switch>
          </HashRouter>
        </div>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
