import { useState, type FormEvent } from 'react';

interface Props {
    onAdd: (text: string) => void;
}

export function TodoForm({ onAdd }: Props) {
    const [text, setText] = useState('');
    const trimmed = text.trim();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!trimmed) return;
        onAdd(trimmed);
        setText('');
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                className="todo-form__input"
                type="text"
                placeholder="Что нужно сделать?"
                value={text}
                onChange={(e) => setText(e.target.value)}
                aria-label="Новая задача"
            />
            <button className="todo-form__button" type="submit" disabled={!trimmed}>
                Добавить
            </button>
        </form>
    );
}