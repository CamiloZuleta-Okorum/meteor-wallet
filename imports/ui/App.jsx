import React from 'react';
import { Header } from './Header'
import { ContactForm } from './ContactForm'
import { ContactList } from './ContactList'

export const App = () => (
  <div>
    <Header />
    <ContactForm />
    <ContactList />
  </div>
);
