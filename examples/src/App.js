import React, {Component} from 'react';
import './App.css';
import JsxExamples from './1-basics/jsxExamples';
import JsxRuntime, {Components} from './1-basics/jsxRuntimeComponentEvaluation';
import {PropertiesComponents} from './1-basics/jsxProperties';
import JsxChildren, {FunctionChild} from './1-basics/jsxChildren';
import ComponentsExample from './1-basics/componentsExample';
import StatePropsExample from "./1-basics/statePropsExample";
import ComponentLifecycleWrapper from "./1-basics/componentLifecycle";

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>JSX Examples</h1>
                    <JsxExamples/>
                </div>
                <div>
                    <h1>JSX Runtime Component Evaluation</h1>
                    <JsxRuntime message="Default"/>
                    <JsxRuntime as={Components.Video} message="as Video"/>
                </div>
                <div>
                    <h1>JSX Properties</h1>
                    <PropertiesComponents.JSExpressions expr={1 + 2 + 3}/>
                    {/*<PropertiesComponents.JSExpressions expr={if(true) "True" else "False"} />*/}
                    {/*<PropertiesComponents.JSExpressions expr={true ? "True" : "False"} />*/}
                    <PropertiesComponents.DefaultProp/>
                    <PropertiesComponents.DefaultProp defaultProp/>
                    <PropertiesComponents.DefaultProp defaultProp="Some value"/>
                    <PropertiesComponents.String literal="Literal String"
                                                 expr={"String".concat(" as").concat(" expr")}/>
                    <PropertiesComponents.SpreadOperator name="Spread Example" age={14} hobby={'Football'}/>
                </div>
                <div>
                    <h1>JSX Children</h1>
                    <JsxChildren/>
                    <JsxChildren>String Literal</JsxChildren>
                    <JsxChildren>
                        <JsxChildren>
                            <JsxChildren>Most inner JSX Child</JsxChildren>
                        </JsxChildren>
                    </JsxChildren>
                    <JsxChildren>{"String".toUpperCase().bold()}</JsxChildren>
                    <FunctionChild numOfTimes={3}>
                        {(index) => <JsxChildren key={index}>This is element with index {index} </JsxChildren>}
                    </FunctionChild>
                    {/*<IgnoredChild />*/}
                </div>
                <div>
                    <h1>Components</h1>
                    <ComponentsExample/>
                </div>
                <div>
                    <h1>State and props</h1>
                    <StatePropsExample/>
                </div>
                <div>
                    <h1>Component lifecycle</h1>
                    <ComponentLifecycleWrapper />
                </div>
            </div>
        )
    }
}

export default App;
