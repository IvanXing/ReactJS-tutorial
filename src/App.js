import React, { Component, Fragment} from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        }
        this.handleToggole = this.handleToggole.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div className={this.state.show ? 'show' : 'hide-animation'}>hello world</div>
                <button onClick={this.handleToggole}>toggle</button>

                <CSSTransition in={this.state.show} timeout={200} classNames="my-node">
                    <div>hello CSSTransition</div>
                </CSSTransition>
                <button type="button" onClick={this.handleToggole}>
                    Click to Enter
                </button>
            </Fragment>
        )
    }

    handleToggole() {
        this.setState({
            show: this.state.show ? false : true,
        })
    }
}

export default App;