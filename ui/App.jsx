import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header'
import { Router } from './Router'

export const App = () => (
  <BrowserRouter>
    <Header />
    <Router />
  </BrowserRouter>
);