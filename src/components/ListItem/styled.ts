import styled from "styled-components";

export const DoneCN = "done";

export const ListItemSC = styled.li`
    font-size: 1.2em;
    font-weight: 500;
    &.${DoneCN} {
        text-decoration: line-through;
    }
`;

export const CheckboxSC = styled.input.attrs({ type: "checkbox" })`
    margin-right: 1em;
`;
