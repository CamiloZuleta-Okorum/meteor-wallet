import { Meteor } from 'meteor/meteor';

import { ContactsCollection } from '../imports/api/ContactsCollection';
import '../imports/api/ContactsMethods'
import { WalletsCollection } from '../imports/api/WalletsCollection';

Meteor.startup(async () => {

  Meteor.publish('contacts', function () {
    return ContactsCollection.find();
  });

  Meteor.publish('wallets', function () {
    return WalletsCollection.fin()
  })
});