import React from 'react';
import {Header} from "../../header/component";

export const LayoutWithHeader = ({children}) =>
    <div>
        <Header/>
        {children}
    </div>;