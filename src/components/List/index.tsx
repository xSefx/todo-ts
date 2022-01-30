import React from "react";
import { observer } from "mobx-react-lite";
import { store } from "../../store";
import { ListItem } from "../ListItem";
import { ListSC } from "./styled";

export const List = observer(() => {
    const { filterTodos } = store;

    return (
        <ListSC>
            {filterTodos &&
                filterTodos.map(todo => <ListItem key={todo.id} {...todo} />)}
        </ListSC>
    );
});
