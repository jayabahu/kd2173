import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './assets/scss/style.scss';

import { SENTRY_DSN } from './lib/constants';

const history = createBrowserHistory();

Sentry.init({
  dsn: SENTRY_DSN,
  integrations: [
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.reactRouterV5Instrumentation(history),
    }),
  ],
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <Router history={history}>
    <Sentry.ErrorBoundary fallback={'An error has occurred'}>
      <App />
    </Sentry.ErrorBoundary>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
