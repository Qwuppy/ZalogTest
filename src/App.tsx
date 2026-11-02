import { useMemo, useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import type { FilterType, Todo } from './types';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { Filter } from './components/Filter';
import './App.css';

export default function App() {
    const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
    const [filter, setFilter] = useState<FilterType>('all');

    const handleAdd = (text: string) => {
        setTodos((prev) => [
            ...prev,
            { id: crypto.randomUUID(), text, completed: false },
        ]);
    };

    const handleToggle = (id: string) => {
        setTodos((prev) =>
            prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
        );
    };

    const handleDelete = (id: string) => {
        setTodos((prev) => prev.filter((t) => t.id !== id));
    };

    const filteredTodos = useMemo(() => {
        switch (filter) {   
            case 'active':
                return todos.filter((t) => !t.completed);
            case 'completed':
                return todos.filter((t) => t.completed);
            default:
                return todos;
        }
    }, [todos, filter]);

    const activeCount = useMemo(
        () => todos.filter((t) => !t.completed).length,
        [todos]
    );

    return (
        <div className="app">
            <h1>Мои задачи</h1>
            <TodoForm onAdd={handleAdd} />
            <Filter value={filter} onChange={setFilter} activeCount={activeCount} />
            <TodoList
                todos={filteredTodos}
                onToggle={handleToggle}
                onDelete={handleDelete}
            />
        </div>
    );
}