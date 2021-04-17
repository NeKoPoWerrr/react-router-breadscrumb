import { renderRoutes, matchRoutes } from 'react-router-config';
import { Link,Route } from 'react-router-dom';
import React from 'react';
import { Breadcrumb } from './components';
import routes from './routes';



export const Home = ({ location }) => {
    return (
        <div>
          <h1 className="py-3">Home</h1>
          <Breadcrumb locationPath={location.pathname} />
        </div>
      );
  };
  
  export const Books = ({ location}) => {
    const onMatchedRoutes = (matchedRoutes) => {
      return [
        {
          route: {
            path: '/',
            breadcrumbName: 'Home'
          }
        },
        ...matchedRoutes
      ];
    };
  
    return (
      <div>
        <h1 className="py-3">Books</h1>
        <Breadcrumb
          locationPath={location.pathname}
          onMatchedRoutes={onMatchedRoutes}
        />
      </div>
    );
  };
  
  
  export const Electronics = ({route,location}) => {
    const onMatchedRoutes = (matchedRoutes) => {
        return [
          {
            route: {
              path: '/',
              breadcrumbName: 'Home'
            }
          },
          ...matchedRoutes
        ];
      };
    return (
        <div>
          <h1 className ="py-3">Electronics</h1>
            <Breadcrumb locationPath={location.pathname}
                        onMatchedRoutes={onMatchedRoutes} />

            {routes.map((route,i)=>{
                const{ path,exact,routes }=route;
                return(
                    <Route
                    key={i}
                    path={path}
                    exact={exact}
                    render={(routeProps)=>{
                        <route.component routes={routes} {...routeProps} />
                    }}
                    />
                );
            })}
            {/* {renderRoutes(route.routes)} */}
            {/* <Route path="/electronics/mobile" component={Mobile} />
            <Route path="/electronics/desktop" component={Desktop} />
            <Route path="/electronics/laptop" component={Laptop} /> */}
        </div>
      );
  };
  
  export const Mobile = (props) => {
    console.log('props in Mobile', props);
    return <h3>Mobile Phone</h3>;
  };
  
  export const Desktop = () => {
    return <h3>Desktop PC</h3>;
  };
  
  export const Laptop = () => {
    return <h3>Laptop</h3>;
  };
