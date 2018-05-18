import React from 'react';
import {Dashboard} from "./component";
import {LayoutWithHeader} from "../common/layouts/withHeader";

export const DashboardPage = (props) =>
    <LayoutWithHeader>
        <Dashboard/>
    </LayoutWithHeader>;