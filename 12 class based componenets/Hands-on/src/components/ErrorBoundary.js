import {Component} from 'react'

class ErrorBoundary extends Component{

    constructor(){
        super()
        this.state={
            hasError: false
        }
    }

    //way to introduce error boundary so basically like a custom exception class which can added to othrs class based componenents, this can't be added to fucntion based compoennte
    componentDidCatch(error){
        this.setState({
            hasError: true
        })
    }

    render(){
        console.log("cap")
        if(this.state.hasError)
            return <p>Yo! Error</p>
        return this.props.children
    }
}

export default ErrorBoundary