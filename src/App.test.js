import React from "react";
import * as rt from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  rt.render(<App />);
 })

 test("Form submit displays its values", () => {
   
  rt.render(<App />);

   const firstName = rt.screen.getByLabelText(/First Name/i);
   const lastName = rt.screen.getByLabelText(/Last Name/i);
   const email = rt.screen.getByLabelText(/Email/i);
   const message = rt.screen.getByLabelText(/Message/i);
   const submitButton = rt.screen.getByText(/submit/i);

   rt.act(()=> {
     rt.fireEvent.change(firstName, { target: { value: 'Ana' }});
     rt.fireEvent.change(lastName, { target: { value: 'Maria' }});
     rt.fireEvent.change(email, { target: { value: 'something@gmail.com' }});
     rt.fireEvent.change(message, { target: { value: 'Hello World' }});

 });

 rt.fireEvent.click(submitButton);

});
