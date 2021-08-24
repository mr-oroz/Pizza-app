import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import './index.scss';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from "./components/error-boundry";
import RestoService from "./services/resto-service";
import RestoServiceContext from "./components/resto-service-context";
import store from "./store";

const restoService = new RestoService()
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundry>
                <RestoServiceContext.Provider value={restoService}>
                    <Router>
                        <App/>
                    </Router>
                </RestoServiceContext.Provider>
            </ErrorBoundry>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


