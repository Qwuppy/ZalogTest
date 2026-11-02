import type { Todo } from '../types';

interface Props {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: Props) {
    return (
        <li className={`todo-item ${todo.completed ? 'todo-item--completed' : ''}`}>
            <label className="todo-item__label">
                <input
                    className="todo-item__checkbox"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                />
                <span className="todo-item__text">{todo.text}</span>
            </label>
            <button
                className="todo-item__delete"
                type="button"
                onClick={() => onDelete(todo.id)}
                aria-label="Удалить задачу"
            >
                ×
            </button>
        </li>
    );
}