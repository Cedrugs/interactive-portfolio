'use client';

import { neofetchData } from "@/lib/data";

export function TerminalHeader() {
    return (
        <div className="bg-terminal-header border-b border-terminal-prompt/20 py-2 px-4 flex items-center justify-between rounded-t-lg">
            <div className="flex items-center gap-4">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"></div>
                </div>
                <div className="ml-4 text-terminal-text text-sm font-medium">
                    {neofetchData.username}@{neofetchData.hostname}: ~
                </div>
            </div>
        </div>
    );
}
