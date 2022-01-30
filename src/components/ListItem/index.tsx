import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { TodoProps } from "../../store";
import { ListItemSC, CheckboxSC, DoneCN } from "./styled";

export interface ListItemProps {
    toggle: () => void;
}

export const ListItem: FC<ListItemProps & TodoProps> = observer(
    ({ title, done, toggle }) => {
        return (
            <ListItemSC className={done ? DoneCN : ""}>
                <label>
                    <CheckboxSC onChange={toggle} defaultChecked={done} />
                    {title}
                </label>
            </ListItemSC>
        );
    },
);
