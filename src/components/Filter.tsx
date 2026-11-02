import type { FilterType } from '../types';

interface Props {
    value: FilterType;
    onChange: (filter: FilterType) => void;
    activeCount: number;
}

const FILTERS: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'Все' },
    { value: 'active', label: 'Активные' },
    { value: 'completed', label: 'Выполненные' },
];

export function Filter({ value, onChange, activeCount }: Props) {
    return (
        <div className="filter">
            <div className="filter__buttons">
                {FILTERS.map((f) => (
                <button
                    key={f.value}
                    type="button"
                    className={`filter__button ${
                    value === f.value ? 'filter__button--active' : ''
                    }`}
                    onClick={() => onChange(f.value)}
                >
                    {f.label}
                </button>
                ))}
            </div>
            <span className="filter__count">Активных: {activeCount}</span>
        </div>
    );
}