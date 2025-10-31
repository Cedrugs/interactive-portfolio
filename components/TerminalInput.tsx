'use client';

import { PromptLine } from './PromptLine';
import { useCommandHistory } from '@/hooks/useCommandHistory';
import { KeyboardEvent, useEffect, forwardRef } from 'react';

interface TerminalInputProps {
    value: string;
    onChange: (value: string) => void;
    onSubmit: (command: string) => void;
    disabled?: boolean;
}

export const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>(
    function TerminalInput({ value, onChange, onSubmit, disabled }, ref) {
        const { addToHistory, navigateHistory } = useCommandHistory();

        useEffect(() => {
            if (ref && 'current' in ref) {
                ref.current?.focus();
            }
        }, [ref]);

        const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (value.trim()) {
                    addToHistory(value);
                    onSubmit(value);
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const historyCommand = navigateHistory('up');
                if (historyCommand !== null) {
                    onChange(historyCommand);
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                const historyCommand = navigateHistory('down');
                if (historyCommand !== null) {
                    onChange(historyCommand);
                }
            }
        };

        return (
            <div className="flex items-center gap-2 font-mono text-sm">
                <PromptLine />
                <div className="flex-1 relative">
                    <input
                        ref={ref}
                        type="text"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={disabled}
                        className="w-full bg-transparent text-terminal-text outline-none border-none caret-terminal-text"
                        autoFocus
                        spellCheck={false}
                        autoComplete="off"
                    />
                </div>
            </div>
        );
    }
);
