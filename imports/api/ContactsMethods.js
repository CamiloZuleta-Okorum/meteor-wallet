import { ContactsCollection } from "./ContactsCollection";


const insertContact = async (contact) => {

    if (contact.name === "" || contact.email === "" || contact.image === "") {

        throw new Meteor.Error("All fields are required")
    }
    else {

        try {

            return await ContactsCollection.insertAsync(contact)
        } catch (error) {

            throw new Metero.Error(error)
        }
    }
}

const removeContact = async (contactId) => {

    try {

        return await ContactsCollection.removeAsync(contactId)
    } catch (error) {

        throw new Meteor.Error(error)
    }
}

Meteor.methods({

    insertContact,
    removeContact
})