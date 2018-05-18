import React from 'react';

export const PropertiesComponents = {

    JSExpressions: ({expr}) =>
        <div>
            <div>Evaluated JS Expression: {expr}</div>
        </div>,
    DefaultProp: ({defaultProp}) =>
        <div>
            <div>Default prop value: {defaultProp ? defaultProp.toString() : "undefined"}</div>
        </div>,
    String: ({literal, expr}) =>
        <div>
            <div>First string is passed as literal: {literal}</div>
            <div>Second string is passed as an expression: {expr}</div>
        </div>,
    SpreadOperator: (props) => {
        const {name, ...others} = props;
        return (
            <div>
                <div>This is the name: {name}</div>
                <div>Those are others: {JSON.stringify(others)}</div>
            </div>
        )
    }

};