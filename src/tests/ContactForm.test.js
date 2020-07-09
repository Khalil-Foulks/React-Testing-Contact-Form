import React from 'react'
import { render, screen } from '@testing-library/react'
import ContactForm from '../components/ContactForm'


test('ContactForm adds new contacts', () => {
    render(<ContactForm />);
    //type into all 4 inputs
    const firstNameInput = screen.getByLabelText(/first name*/i);
    const lastNameInput = screen.getByLabelText(/last name*/i);
    const emailInput = screen.getByLabelText(/email*/i);
    const messageInput = screen.getByLabelText(/message/i);
     //first 3 inputs should be required
     //firstname should contain placeholder = Edd
     //Lastname should contain placeholder = Burke
     //email should contain a placeholder = bluebill1049@hotmail.com
   
   
   //click submit button
   
   //assert that inputs show up under the form
   })