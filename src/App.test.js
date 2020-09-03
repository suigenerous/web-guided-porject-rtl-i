import React from "react";
import { render, screen } from "@testing-library/react"; // to render components in a virtual dom
import App from "./App"; // we need the component we are testing and rendering

// jest global functions to write our tests
// - test() // used to run a test

// Jest is going to be our "test runner"

// test('title', cbToRunTheTest)

test('renders App component without errors', () => {
    // Render the App component
    render(<App/>);

    // tests will fail if an error is thrown from any function or component inside the test callback
    // throw new Error("This test failed because we manually threw an error.");
    // breakTheTest(true);
})


// function breakTheTest(someValue){
//     if (someValue === true){
//         // do nothing
//     } else {
//         throw new Error("We thre an error inside function breakTheTest");
//     }
// }


// AAA Framework Arange, Act, Assert


// query the virtual dom for an element and make an assertion about that element
test('App renders the from header', () =>{
    // Arrange
    render(<App/>);
    // Act
    // query for the header element
    
    const header = screen.getByText(/add new animal/i)

    // make an assertion
    // more jest flobal functions

    expect(header).toBeInTheDocument()

})

