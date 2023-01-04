import PropTypes from "prop-types"
import {List, Button} from './Contacts.styled';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";


export const Contacts = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.filter.query);
    const dispatch = useDispatch();

    let normalizedFilter = filter?.toLowerCase();
  const filtredContacts = contacts.filter(contact =>
    contact.name?.toLowerCase().includes(normalizedFilter)
  );


    return (
            <List>
                {filtredContacts.map(contact => {  
                    return (<li 
                        key={contact.id} 
                        >{contact.name}: {contact.number}
                    <Button 
                        onClick={() => {dispatch(deleteContact(contact.id))}} 
                        
                        style={{ width: '22%', marginLeft:'10px' }}>Delete</Button></li>)
                })}
            </List>
        )                                      
    }

    Contacts.propTypes = {
        deleteContact:PropTypes.func
    }
