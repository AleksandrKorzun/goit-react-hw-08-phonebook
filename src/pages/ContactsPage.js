import Contacts from "../components/Contacts/Contacts";
import Filter from "../components/Filter/Filter";
import Phonebook from "../components/Phonebook/Phonebook";

const ContactsPage = () => {
    return (
        <>
            <h1 style={{textAlign: "center"}}>Phonebook</h1>
            <Phonebook />

            <h2 style={{textAlign: "center"}}>Contacts</h2>
            <Filter />
            <Contacts />
        </>
    );
}

export default ContactsPage;