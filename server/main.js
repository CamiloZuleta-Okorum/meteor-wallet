import { Meteor } from 'meteor/meteor';

import { ContactsCollection } from '../api/ContactsCollection';
import '../api/ContactsMethods'
import { WalletsCollection } from '../api/WalletsCollection';
import '../api/WalletsMethods'

Meteor.startup(async () => {

  Meteor.publish('contacts', function () {
    return ContactsCollection.find();
  });

  Meteor.publish('wallets', function () {
    return WalletsCollection.find()
  })

  const walletMain = await WalletsCollection.find({name: 'Main Wallet'}).countAsync()

  if (!walletMain) {

    const wallet = { 
        name: 'Main Wallet',
        balance: 0,
        currency: 'COP',
        createdAt: new Date()
      }

    WalletsCollection.insertAsync(wallet);
  }
});