import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from  './ContactForm';

test ('test test' , async () => {
    expect(true).toBeTruthy();
})

// test ('Input Placeholder Rendering', async () =>{
//     const { getByText } = render(<ContactForm/>);
//     const placeholder = getByText(/bill/i);
//     expect(placeholder).toBeInTheDocument();
// })

test ('Input Type Test', async () =>{
    // Arrange
    const testEmail = 'testemail@gmail.com';
    const badEmail = 'testEmail';


    

})