import { Meteor } from 'meteor/meteor'
import { ContactsCollection } from "./ContactsCollection";
import { check } from 'meteor/check'

const insertContact = async (contact) => {

    try{

        if (contact.name === "" || contact.email === "" || contact.image === "" || contact.walletId === "") {

            throw new Meteor.Error("All fields are required")
        }
        else {

            try {

                check(contact, {
                    name: String,
                    email: String,
                    image: String,
                    walletId: String,
                    createdAt: Date
                });

                try {

                    return await ContactsCollection.insertAsync(contact)
                } catch (errorDatabase) {
    
                    console.log(errorDatabase)
    
                    throw new Meteor.Error('Database Error')
                }
            } catch (errorCheck) {

                throw new Meteor.Error(errorCheck.error || 'Data Validation Error')
            }
        }
    } catch (errorThrow) {

        throw new Meteor.Error(errorThrow.error || 'Internal Server Error')
    }
}

const removeContact = async (contactId) => {

    check(contactId, String)

    try {

        try {

            check(contactId, String)

            try {

                return await ContactsCollection.removeAsync(contactId)
            } catch (errorDatabase) {
    
                throw new Meteor.Error('Database Error')
            }
        } catch (errorCheck) {

            throw new Meteor.Error(errorCheck.error || 'Data Validation Error')
        }
    } catch (errorThrow) {

        throw new Meteor.Error(errorThrow.error || 'Internal Server Error')
    }
}

Meteor.methods({

    insertContact,
    removeContact
})