import React from "react";
import { render, screen, fireEvent } from "@testing-library/react"; // to render components in a virtual dom
import AnimalForm from "./AnimalForm"; // we need the component we are testing and rendering




test('animal form adds new animals to the list', () => {
    render(<AnimalForm/>);
    // type into all three inuts
    // 1) query for all inputs
    // 2) run the change event to add text

    const speciesInput = screen.getByLabelText(/species/i);
    const ageInput = screen.getByLabelText(/age/i);
    const notesInput = screen.getByLabelText(/notes/i);

    // events with RTL

    fireEvent.change(speciesInput, { target: { value: 'Monkey'}})
    fireEvent.change(ageInput, { target: { value: 15}})
    fireEvent.change(notesInput, { target: { value: 'docile'}})

    // click submit button

    const submitButton = screen.getByText(/submit/i);

    fireEvent.click(submitButton);

    // assert that my new animal is in the list

    const newAnimal = screen.getByText(/monkey/i);
    expect(newAnimal).toBeInTheDocument();


})