// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeQueryFilter } from 'redux/filterSlice';
import {Box} from '../Box'
import {Label, Input}from './Filter.styled';
import PropTypes from "prop-types"

export let filteredContacts = null; 

export const Filter = () => {
    const filter = useSelector(state => state.filter.query);
    const dispatch = useDispatch();

    // let normalizedFilter = filter.toLowerCase();
    // filteredContacts = contacts.filter((contact) =>  
    // contact.name.toLowerCase().includes(normalizedFilter)) 


    return(
        <Box display='flex'
        flexDirection='column'>
            <Label htmlFor="search">Find contacts by name</Label>
            <Input id="search" type="text" value={filter} onChange={e => dispatch(changeQueryFilter(e.target.value))} />
        </Box>
    )

}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    filter: PropTypes.string,
    contacts:PropTypes.array
  };