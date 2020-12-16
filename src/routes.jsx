import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import Forms from './pages/Forms'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/home" component={Forms} />
        </BrowserRouter>
    )
}

export default Routes;