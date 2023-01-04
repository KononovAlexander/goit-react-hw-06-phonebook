import PropTypes from "prop-types"
import {Box} from '../Box'
import {Input, Button, Label}from './Form.styled';
import { useDispatch, useSelector } from "react-redux";
import { addContact} from "redux/contactsSlice";
import { nanoid } from 'nanoid';

export const Form = () => {
    const dispatch = useDispatch();
    // const names = useSelector(state => state.contacts.map(contact => contact.name));
    const contacts = useSelector(state => state.contacts.contacts);

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const number = event.target.elements.number.value;
        const isExist = contacts.find(contact => contact.name  === name);
        
        if(isExist) {return alert(`${name} is allready in contacts`)}
        
            const contact = {
                id: nanoid(),
                name,
                number
            }
            dispatch(addContact(contact));
            event.target.reset();
        }

    return(
    <Box  as="form" border="normal" p={4} 
    display='flex'
     flexDirection='column' 
     width={400}
     onSubmit={handleSubmit}
      >
        <Label htmlFor='name' >Name</Label>
            <Input 
                id="name"
                type="text"
                name="name"
                // value=''
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
                <Label htmlFor="number">Number</Label>
                <Input
                  id="number"
                  type="tel"
                  name="number"
                //   value=''
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
                <Button type="submit">Add contact</Button>
    </Box >
                )
}

Form.propTypes = {
    onSubmit:PropTypes.func
}