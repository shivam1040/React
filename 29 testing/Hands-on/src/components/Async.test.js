import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Async', () => {
    test('renders post on success request', async () => {
        //this means we are mocking fetch function being used in Async componenents
        window.fetch = jest.fn()
        // this means we are giving the return value to the function json being called in Async componenent
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First'}]
        })
        render(<Async></Async>)
        //getting all list elements
        //this test will fail 'cause it doesn't wait for elements to be rendered
        //const lists = screen.getAllByRole('listitem')

        //this returns a promise which waits for by default 1 sec for the element to be rendered, also has retries
        const lists = await screen.findAllByRole('listitem')

        expect(lists).not.toHaveLength(0)
    })
})