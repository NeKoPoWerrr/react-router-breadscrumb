import { render } from '@testing-library/react';
import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import { Navbar } from './components';
import { Home , Books, Electronics } from './pages';
import routes from './routes';
import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
      {routes.map((route,i) =>{
        const{path,exact,routes} = route;
        return(
          <Route
          key={i}
          path={path}
          exact={exact}
          render={(routeProps)=>(
          <route.component routes={routes} {...routeProps}/>
          )}
          />
        ) 
      })}
      {/* {renderRoutes(routes)} */}
      {/* <Route path="/" exact component={Home} />
      <Route path="/books" component={Books} />
      <Route path="/electronics" component={Electronics} /> */}
    </div>
    );
  }
}

export default App;
