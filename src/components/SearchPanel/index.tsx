import React from "react";
import { observer } from "mobx-react-lite";
import { store } from "../../store";
import { SearchPanelSC, InputSC } from "./styled";

export const SearchPanel = observer(() => {
    const { search, setText, addTodo, todos } = store;

    const handleSubmitForm = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (search.trim()) {
            addTodo({ title: search, id: todos.length });
        }
        setText("");
    };

    const handleSetText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <SearchPanelSC onSubmit={handleSubmitForm}>
            <InputSC value={search} onChange={handleSetText} />
            <button onClick={handleSubmitForm}>Добавить</button>
        </SearchPanelSC>
    );
});
