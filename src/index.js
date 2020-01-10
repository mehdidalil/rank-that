import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import darkTheme from './config';
import reducers from './reducers';
import Routing from './route';

const App = () => {
    return (
        <div>
            <CssBaseline />
            <Routing />
        </div>
    )
}

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <ThemeProvider theme={darkTheme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.querySelector("#root")
);
