import React from 'react';
import { ContactsCollection } from '../api/ContactsCollection';
import { useTracker, useSubscribe } from 'meteor/react-meteor-data'

export const ContactList = () => {

    useSubscribe('contacts');
    const contacts = useTracker(() => {

        return ContactsCollection.find().fetch();
    });

    return (
        <div>
            <h2>Contact List</h2>
            <ul>
                {contacts.map(c => (
                    <li key={c._id}>{c.name} - {c.email}</li>
                ))}
            </ul>
        </div>
    )
}