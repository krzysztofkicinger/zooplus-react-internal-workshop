import React, {PureComponent} from 'react';

class JsxExamples extends PureComponent {


    /**
     *      EMBEDDED EXPRESSION - Variables
     */
    renderJSXWithEmbeddedExpressions = () => {
        const name = "John Smith";
        return <div>This is JSX with embedded expression ${name}</div>;
    };


    /**
     *      EMBEDDED EXPRESSION - Functions
     */
    renderJSXWithFunctionAsTheEmbeddedExpression = () => {
        const user = {firstName: "John", lastName: "Smith"};
        return <div>This is JSX which embeds function result: ${this.formatName(user)}</div>
    };

    formatName = ({firstName, lastName}) => `${firstName} ${lastName}`;


    /**
     *      EMBEDDED EXPRESSION - JSX as an expression
     */
    renderJSXAsTheVariableComponent = () => {
        const userComponent = <div>Users Component</div>;
        return <div>This is JSX which embeds function result: ${userComponent}</div>
    };


    /**
     *      Composition
     */
    static renderComposedJSX() {
        const color = "red";
        return (
            <div>This is the outer component:
                <span style={{color}}>This is the inner component</span>
            </div>
        );
    }


    /**
     *      XSS PREVENTION
     */
    renderJSXWithPossibleXSS() {
        return <div>{this.xssAttack()}</div>
    }

    xssAttack = () => "<script>window.alert('Remove all from DB')</script>";


    render = () => {

        const jsxAsVariable = <div>This JSX is a variable</div>;

        return (
            <div>
                {jsxAsVariable}
                {this.renderJSXWithEmbeddedExpressions()}
                {this.renderJSXWithFunctionAsTheEmbeddedExpression()}
                {this.renderJSXAsTheVariableComponent()}
                {JsxExamples.renderComposedJSX()}
                {this.renderJSXWithPossibleXSS()}
            </div>
        )

    }

}

export default JsxExamples;