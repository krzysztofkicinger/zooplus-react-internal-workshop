import React from 'react';

const InnerComponent = (props) =>
    <div>
        This is inner component: {props.index}
    </div>;

const ReactElementComponent = (props) => {
    const element = React.createElement(
        'div',  // type
        null,   // props
        "This is inner component: ", // children
        props.index
    );
    console.log(element);
    return element;
};

export default (props) => {
    const firstInstance = <InnerComponent index={1}/>;
    const secondInstance = <InnerComponent index={2}/>;
    const thirdInstance = <InnerComponent index={3}/>;

    return (
        <div>
            {firstInstance}
            {secondInstance}
            {thirdInstance}
            <ReactElementComponent index={4}/>
        </div>
    )
}
