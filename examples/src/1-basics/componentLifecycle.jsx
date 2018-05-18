import React, {Component} from 'react';

class LifecycleComponent extends Component {

    /**
     *  CONSTRUCTOR:
     *      - before component is mounted
     *      - must invoke super(props), otherwise this.props will be undefined in the constructor
     *      - avoid any side-effect or subscriptions in constructor
     *      - initialize state using this.state
     *      - bind event handlers to the class instance
     */
    constructor(props) {
        super(props);
        console.log("Constructor invoked: ", this.props, this.state);

        this.state = {
            mutable: "Some value"
        }
    }

    /**
     *  COMPONENT WILL MOUNT:
     *      - Deprecated
     *      - just before mounting occurs
     *      - called before render() therefore calling synchronous setState() will not trigger an extra rendering
     *      - avoid any side-effect or subscriptions in constructor
     */
    componentWillMount() {
        console.log("Component will mount", this.props, this.state)
    }

    render() {
        console.log("Render: ", this.props, this.state);
        return <div>Component lifecycle component</div>;
    }

    /**
     *  COMPONENT DID MOUNT:
     *      - immediately after a component is mounted
     *      - side-effect or subscriptions
     *      - initialization that requires DOM nodes
     *      - network calls, remote endpoints, subscriptions
     *      - setState() - triggers extra rendering, but it will happen before the browser updates the screen
     *          - render will be called twice
     *          - but user does not see intermediate state
     *          - performance issues
     *          - sometimes useful for modals (measuring current screen etc.)
     */
    componentDidMount() {
        console.log("Component did mount: ", this.props, this.state)
    }

    /**
     *  COMPONENT WILL UNMOUNT:
     *      - release resources initialized in componentDidMount() - subscriptions
     *
     */
    componentWillUnmount() {
        console.log("Component will unmount: ", this.props, this.state)
    }


    /**
     * ----------------------------------------------------------------------------------------
     */


    /**
     *  COMPONENT WILL RECEIVE PROPS:
     *      - Deprecated
     *      - calculate new state based on the props in getDerivedStateFromProps
     *      - side-effect actions in response to a change in props - componentDidUpdate()
     *
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {
        console.log("Component will receive props: ", this.props, this.state, nextProps)
    }

    /**
     *  SHOULD COMPONENT UPDATE:
     *      - consider carefully overriding this method - default behavior is really good
     *      - default behavior - re-render on every state change
     *      - not called for initial render
     *      - PureComponent- does the shallow props and state comparison
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should component update: ", this.props, this.state, nextProps, nextState);
        return true
    }

    /**
     *  COMPONENT WILL UPDATE:
     *      - deprecated
     *      - just before rendering when new props and state are received
     */
    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update: ", this.props, this.state, nextProps, nextState);
    }

    /**
     *  SNAPSHOT BEFORE UPDATE:
     *      - invoked before most recent changes are committed to the DOM
     *      - Enables capturing current values (e.g. scroll position)
     *      - value returned by this lifecycle will be passed as parameter to the componentDidUpdate()
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Get snapshot before update: ", this.props, this.state, prevProps, prevState);
        return null;
    }

    /**
     *  SNAPSHOT BEFORE UPDATE:
     *      - invoked immediately after updating occurs
     *      - will not be invoked if shouldComponentUpdate() returns false
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component did update: ", this.props, this.state, prevProps, prevState, snapshot);

    }

    /**
     *  GET DERIVED STATE FROM PROPS:
     *      - It should return an object to update state, or null to indicate that the new props do not require any state updates.
     */
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("Get derived state from props: ", nextProps, prevState);
        return null
    }

}

class ComponentLifecycleWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "My name is John Smith",
            visible: true
        }
    }

    updateState = (event) => this.setState({message: "Some new value"});

    showComponent = (event) => this.setState({visible: true});

    removeComponent = (event) => this.setState({visible: false});

    render = () =>
        <div>
            <button onClick={this.updateState}>Update message</button>
            <button onClick={this.showComponent}>Show component</button>
            <button onClick={this.removeComponent}>Remove component</button>
            {this.state.visible && <LifecycleComponent message={this.state.message}/>}
        </div>;

}

export default ComponentLifecycleWrapper;