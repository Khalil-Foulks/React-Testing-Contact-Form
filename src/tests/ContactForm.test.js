import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from '../components/ContactForm'


test('ContactForm adds new contacts', () => {
    render(<ContactForm />);
    //type into all 4 inputs
    const firstNameInput = screen.getByLabelText(/first name*/i);
    const lastNameInput = screen.getByLabelText(/last name*/i);
    const emailInput = screen.getByLabelText(/email*/i);
    const messageInput = screen.getByLabelText(/message/i);
     

    fireEvent.change(firstNameInput, { target:{ value:'Joey'} })
    fireEvent.change(lastNameInput, { target:{ value:'Wheeler'} })
    fireEvent.change(emailInput, { target:{ value:'duelmonsters@gmail.com'} })
    fireEvent.change(messageInput, { target:{ value:'I hate Seto Kaiba.'} })

    expect(firstNameInput.value).toBe('Joey')
    expect(lastNameInput.value).toBe('Wheeler')
    expect(emailInput.value).toBe('duelmonsters@gmail.com')
    expect(messageInput.value).toBe('I hate Seto Kaiba.')

    //firstname should contain placeholder = Edd
    //Lastname should contain placeholder = Burke
    //email should contain a placeholder = bluebill1049@hotmail.com
     const firstNamePlaceholder = screen.getByPlaceholderText(/edd/i);
     const lastNamePlaceholder = screen.getByPlaceholderText(/burke/i);
     const emailPlaceholder = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);

    

   //first 3 inputs should be required
   
   //click submit button
   const submitButton = screen.getByRole('button');
   fireEvent.click(submitButton);
   
   //assert that inputs show up under the form
    const newFirstName = screen.findByText(/joey/i)
    const newNewlastName = screen.findByText(/wheeler/i)
    const newEmail = screen.findByText(/duelmonsters@gmail.com/i)
    const newMessage = screen.findByText(/i hate seto kaiba/i)
    // expect(newContact).toBeInTheDocument();
   })