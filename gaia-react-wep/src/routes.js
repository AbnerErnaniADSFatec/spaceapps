import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Maps from './pages/maps';
import Charts from './pages/charts';

export default function Routes(){
    return (
        <BrowserRouter>
            <Route path = "/" exact component = { Maps }/>
            <Route path = "/charts" exact component = { Charts }/>
        </BrowserRouter>
    );
} 