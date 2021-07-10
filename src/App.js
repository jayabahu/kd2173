import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views
import Home from './views/Home';
import Story from './views/Story';
import Dashboard from './views/Dashboard';
import ForgotPassword from './views/ForgotPassword';
import ResetPassword from './views/ResetPassword';

import { GA_CODE } from './lib/constants';

// Initialize Google Analytics
ReactGA.initialize(GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded');
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute
              exact
              path="/our-story"
              component={Story}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path="/dashboard"
              component={Dashboard}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path="/forgot-password"
              component={ForgotPassword}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path="/reset-password"
              component={ResetPassword}
              layout={LayoutDefault}
            />
          </Switch>
        )}
      />
    </ThemeProvider>
  );
};

export default App;
