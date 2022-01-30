import { types } from "mobx-state-tree";

export interface TodoProps {
    id: number;
    title: string;
    done?: boolean;
}

const Todo = types
    .model({
        id: types.optional(types.number, 0),
        title: types.optional(types.string, ""),
        done: types.optional(types.boolean, false),
    })
    .actions(self => ({
        toggle() {
            self.done = !self.done;
        },
    }));
const RootStore = types
    .model({
        search: types.optional(types.string, ""),
        todos: types.optional(types.array(Todo), []),
    })
    .views(self => ({
        get filterTodos() {
            return !self.search.length
                ? self.todos
                : self.todos.filter(({ title }) =>
                      title.toLowerCase().includes(self.search.toLowerCase()),
                  );
        },
    }))
    .actions(self => ({
        addTodo({ id, title }: TodoProps) {
            self.todos.push(Todo.create({ id, title }));
        },
        setText(value: string) {
            self.search = value;
        },
    }));

export const store = RootStore.create();
