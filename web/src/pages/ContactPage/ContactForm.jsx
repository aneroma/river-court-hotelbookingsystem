import React from 'react';
import {v4} from "uuid";
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("myyvzqzz");
  if (state.succeeded) {
      return <p>Message has been sent!</p>;
  }

  const formFields = [
  {name: "name", label: "Your Name", type: "text", required: true},
  {name: "email", label: "Your Email Address", type: "email", required: true},
  {name: "message", label: "Your Message", type: "textbox", required: true},
  ];

  const className = "p-3 rounded-2xl text-textPrimary placeholder:text-textLight w-full bg-gray-100 focus:outline-primary-400";


  return (
   <form
      action="submit"
      className="flex flex-col bg-white p-4 rounded-3xl gap-4 w-full h-max"
      onSubmit={handleSubmit}
    >
      {formFields.map((field) => {
        return field.type !== "textbox" ? (
          <input
            key={v4()}
            type={field.type}
            name={field.name}
            placeholder={field.label}
            required={field.required}
            className={className}
          />
        ) : (
          <textarea
            key={v4()}
            name={field.name}
            placeholder={field.label}
            required={field.required}
            className={className + " h-[130px] resize-y"}
          ></textarea>
        );
      })}
      <button type="submit" className="btn-primary" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}
export default App;