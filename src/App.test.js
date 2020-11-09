import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
 });

 test("Form submit displays its values", () => {
   
  render(<App />);

  //Getting all the input fields
  const fnInput = screen.getByLabelText(/first name*/i);
  const lsInput = screen.getByLabelText(/last name*/i);
  const email = screen.getByLabelText(/email*/i);
  const message = screen.getByLabelText(/message/i);
  
  //getting the submit field
  const submit = screen.getByTestId(/submit/i);
  
  act(()=>{
    fireEvent.change(fnInput, { target: { value: 'Ana' }});
    fireEvent.change(lsInput, { target: { value: 'Winslow' }});
    fireEvent.change(email, { target: { value: 'something@gmail.com' }});
    fireEvent.change(message, { target: { value: "Hello World"}});
    
  });

  fireEvent.click(submit);
  
});
