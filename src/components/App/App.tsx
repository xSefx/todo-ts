import React from "react";
import { SearchPanel } from "../SearchPanel";
import { List } from "../List";

import { AppWrapperSC } from "./styled";

export const App = () => {
    return (
        <AppWrapperSC>
            <h2>Todo List</h2>
            <SearchPanel />
            <List />
        </AppWrapperSC>
    );
};
