// import  {useState, useEffect} from 'react';
import {Box} from './Box'
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
// import { useDispatch, useSelector } from "react-redux";
// import { getContacts } from "redux/selectors";
// import { addContact} from "redux/actions";
import styled from 'styled-components';

const Title = styled.h2`
font-size:36px;
`;

 export  const App = () => { 
  // const dispatch = useDispatch();
  // const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? '');
  // const [filter, setFilter] = useState('');
  // const contacts = useSelector(getContacts);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts))
  // },[contacts]);

    

      return (
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
            flexDirection: 'column'
          }}
        >
          <div>
            <Title>Phonebook</Title>
          <Form />

          </div>
          <Box width={400}>
          <Title>Contacts</Title>
                
                <Filter 
                  // value={filter} 
                    // onChange={event => setFilter(event.currentTarget.value)}  
                    // filter={filter} 
                    // contacts={contacts} 
                    />
                  <Contacts 
              // deleteContact={id => dispatch(addContact(contacts.filter(contact => contact.id !== id)))}
              />
          </Box>
        </div>
      );
}
