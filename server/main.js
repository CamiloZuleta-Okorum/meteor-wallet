import { Meteor } from 'meteor/meteor';

import { ContactsCollection } from '../imports/api/ContactsCollection';
import '../imports/api/ContactsMethods'

Meteor.startup(async () => {

  Meteor.publish('contacts', function () {
    return ContactsCollection.find();
  });
});