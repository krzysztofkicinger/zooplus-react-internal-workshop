import React, {Component} from 'react';

const InnerComponent = ({inputValue}) =>
    <div>
        Current input value {inputValue}
    </div>;


class StatePropsExample extends Component {

    constructor(props) {
        super(props);
        this.state = {}     // Initialize State
    }

    handleInputChange = (event) => {
        const currentValue = event.target.value;
        this.setState({
            inputValue: currentValue
        });
        console.log(`Input value: ${currentValue}`);
    };

    render = () =>
        <form>
            <input type='text' onChange={this.handleInputChange}/>
            <InnerComponent inputValue={this.state.inputValue}/>
        </form>;

}

export default StatePropsExample;