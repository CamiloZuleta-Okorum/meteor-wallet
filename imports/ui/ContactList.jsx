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
          <div className="mt-10 px-20">
            <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wide">
              Contact List
            </h3>
            <ul role="list" className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
              {contacts.map(contact => (
                <li key={contact._id} className="py-4 flex items-center justify-between space-x-3">
                  <div className="min-w-0 flex-1 flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img className="h-20 w-20 rounded-full" src={contact.image} alt="" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xl font-medium text-gray-900 truncate">{contact.name}</p>
                      <p className="text-xl font-medium text-gray-500 truncate">{contact.email}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
}