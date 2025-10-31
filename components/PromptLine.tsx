'use client';

import { neofetchData } from "@/lib/data";

interface PromptLineProps {
    showPrompt?: boolean;
}

export function PromptLine({ showPrompt = true }: PromptLineProps) {
    return (
        <div className="flex items-center gap-2 font-mono text-sm shrink-0">
            {showPrompt && (
                <>
                    <span className="text-terminal-success font-bold">[{neofetchData.username}@{neofetchData.hostname} ~]</span>
                    <span className="text-terminal-prompt font-bold">$</span>
                </>
            )}
        </div>
    );
}
