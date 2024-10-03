import React, { useState } from 'react'
import { ContactsCollection } from '../api/ContactsCollection'
 
export const ContactForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState("")

    const handleSaveContact = async () => {

        if (!(name === "" || email === "" || image === "")) {

            const contact = {
                name,
                email,
                image,
                createdAt: new Date()
            }

            await ContactsCollection.insert(contact)

            setName("")
            setEmail("")
            setImage("")
        }
    }

    return (
        <form>
            <div>  
                <label>
                Name
                </label>
                <input type="text"
                className="name"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label>
                Email
                </label>
                <input type="email"
                className="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>  
                <label>
                ImageURL
                </label>
                <input type="text"
                className="Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}/>
            </div>
            <div>
                <button type="button" onClick={handleSaveContact}>Save contact</button>
            </div>
        </form>
    )
}