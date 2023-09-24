import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"
import userEvent from '@testing-library/user-event'


//labels to group tests, test can also live indepependently
describe('greeting', () => {
    test('has hello world', () => {
        //Arrange
        render(<Greeting></Greeting>)
    
        //Assert
        const hello = screen.getByText('Hello', {exact: false})
        expect(hello).toBeInTheDocument()
    })

    test('renders bye if unclicked', () => {
        render(<Greeting></Greeting>)
        const para = screen.getByText('Bye', {exact: false})
        expect(para).toBeInTheDocument()
    })

    test('renders nice if clicked', () => {
        render(<Greeting></Greeting>)
        //Act
        const button = screen.getByRole('button')

        userEvent.click(button)
        
        const nice = screen.getByText('Nice')
        
        expect(nice).toBeInTheDocument()
    })

    test('does not render bye if clicked', () => {
        render(<Greeting></Greeting>)
        
        const button = screen.getByRole('button')
        
        userEvent.click(button)

        const nice = screen.queryByText('Nice')

        expect(nice).not.toBeNull()
    })
})
