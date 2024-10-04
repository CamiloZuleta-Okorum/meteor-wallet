import React from 'react';
import { ContactsCollection } from '../api/ContactsCollection';
import { useTracker, useSubscribe } from 'meteor/react-meteor-data'
import { ContactCard } from './ContactCard'

export const ContactList = () => {

    useSubscribe('contacts');
    const contacts = useTracker(() => {

        return ContactsCollection.find({}, {sort: {name: 1}}).fetch();
    });

    return (
        <div>
          <div className="mt-10 px-20">
            <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wide">
              Contact List
            </h3>
            <ul role="list" className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
              {
                contacts.map(contact => (
                  <ContactCard key={contact._id} contact={contact}/>
                ))
              }
            </ul>
          </div>
        </div>
      )
}