import { render, screen } from "@testing-library/react";
import Contact from  '../Contact'
import "@testing-library/jest-dom"



it("Should load our contact us page",()=>{
       render(<Contact/>)
       const heading= screen.getByRole('heading');
       expect(heading).toBeInTheDocument();
})
it("Should load our contact us page",()=>{
       render(<Contact/>)
       const button= screen.getByRole('button');
       expect(button).toBeInTheDocument();
})
it("Should load two input element",()=>{
    render(<Contact/>)

    const inputs=screen.getAllByRole('textbox');

    expect(inputs.length).toBe(2);
})
