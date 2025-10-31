'use client';

import { neofetchData } from '@/lib/data';

export function Neofetch() {
    const colorBlocks = [
        'bg-red-500',
        'bg-yellow-500',
        'bg-green-500',
        'bg-cyan-500',
        'bg-blue-500',
        'bg-purple-500',
        'bg-pink-500',
        'bg-white',
    ];

    const asciiArt = [
        '                   -`',
        '                  .o+`',
        '                 `ooo/',
        '                `+oooo:',
        '               `+oooooo:',
        '               -+oooooo+:',
        '             `/:-:++oooo+:',
        '            `/++++/+++++++:',
        '           `/++++++++++++++:',
        '          `/+++ooooooooooooo/`',
        '         ./ooosssso++osssssso+`',
        '        .oossssso-````/ossssss+`',
        '       -osssssso.      :ssssssso.',
        '      :osssssss/        osssso+++.',
        '     /ossssssss/        +ssssooo/-',
        '   `/ossssso+/:-        -:/+osssso+-',
        '  `+sso+:-`                 `.-/+oso:',
        ' `++:.                           `-/+/',
        ' .`                                 `',
    ];

    return (
        <div className="flex flex-col md:flex-row gap-8 mb-8 text-terminal-text font-mono text-sm">
            <div className="shrink-0">
                <pre className="text-cyan-400">
                    {asciiArt.map((line, i) => (
                        <div key={i}>{line}</div>
                    ))}
                </pre>
            </div>

            <div className="flex-1 ">
                <div className="text-cyan-400 font-bold text-sm">
                    {neofetchData.username}@{neofetchData.hostname}
                </div>
                <div className="text-terminal-text font-bold text-sm mb-2">
                    -----------------------
                </div>

                <InfoLine label="OS" value={neofetchData.os} />
                <InfoLine label="Shell" value={neofetchData.shell} />
                <InfoLine label="Terminal" value={neofetchData.terminal} />
                <InfoLine label="CPU" value={neofetchData.cpu} />
                <InfoLine label="Memory" value={neofetchData.memory} />
                <InfoLine label="Uptime" value={neofetchData.uptime} />

                <div className="mt-4 flex gap-1">
                    {colorBlocks.map((color, i) => (
                        <div key={i} className={`w-6 h-4 ${color}`}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function InfoLine({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex gap-2">
            <span className="text-cyan-400 font-bold min-w-20">{label}:</span>
            <span className="text-terminal-text">{value}</span>
        </div>
    );
}
