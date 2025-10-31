import { CommandHandler } from './types';
import {
    experienceData,
    techStackData,
    aboutData,
    projectsData,
    contactData
} from './data';

export const commands: Record<string, CommandHandler> = {
    help: {
        description: 'List all available commands',
        execute: () => (
            <div className="space-y-1">
                <div className="text-terminal-success font-bold mb-3">Available Commands:</div>
                {Object.entries(commands).map(([cmd, handler]) => (
                    <div key={cmd} className="flex gap-2">
                        <span className="text-terminal-accent font-bold min-w-[120px]">{cmd}</span>
                        <span className="text-terminal-text">{handler.description}</span>
                    </div>
                ))}
            </div>
        ),
    },

    clear: {
        description: 'Clear the terminal screen',
        execute: () => null,
    },

    about: {
        description: 'Learn more about me',
        execute: () => (
            <div className="space-y-3">
                <div className="text-terminal-success font-bold">{aboutData.name}</div>
                <div className="text-terminal-accent">{aboutData.tagline}</div>
                <div className="text-terminal-text leading-relaxed whitespace-pre-line">
                    {aboutData.bio}
                </div>
            </div>
        ),
    },

    experience: {
        description: 'View my work experience',
        execute: () => (
            <div className="space-y-4">
                <div className="text-terminal-success font-bold mb-3">Work Experience:</div>
                {Object.entries(experienceData).map(([company, positions]) => (
                    <div key={company}>
                        <div className="text-terminal-accent font-bold">{company}</div>
                        {positions.map((exp, index) => (
                            <div key={index} className="border-l-2 border-terminal-prompt pl-4 ml-4 space-y-1">
                                <div className="text-terminal-accent font-bold">{exp.position}</div>
                                <div className="text-terminal-prompt text-sm">{exp.period}</div>
                                <div className="text-terminal-text text-sm mt-2">{exp.description}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        ),
    },

    techstack: {
        description: 'See my technical skills',
        execute: () => (
            <div className="space-y-3">
                <div className="text-terminal-success font-bold mb-3">Tech Stack:</div>

                <div>
                    <div className="text-terminal-accent font-bold mb-1">Languages:</div>
                    <div className="text-terminal-text">{techStackData.languages.join(' • ')}</div>
                </div>

                <div>
                    <div className="text-terminal-accent font-bold mb-1">Frontend:</div>
                    <div className="text-terminal-text">{techStackData.frontend.join(' • ')}</div>
                </div>

                <div>
                    <div className="text-terminal-accent font-bold mb-1">Backend:</div>
                    <div className="text-terminal-text">{techStackData.backend.join(' • ')}</div>
                </div>

                <div>
                    <div className="text-terminal-accent font-bold mb-1">Tools & Platforms:</div>
                    <div className="text-terminal-text">{techStackData.tools.join(' • ')}</div>
                </div>
            </div>
        ),
    },

    projects: {
        description: 'Browse my portfolio projects',
        execute: () => (
            <div className="space-y-4">
                <div className="text-terminal-success font-bold mb-3">Projects:</div>
                {projectsData.map((project, index) => (
                    <div key={index} className="space-y-1">
                        <div className="text-terminal-accent font-bold">{project.name}</div>
                        <div className="text-terminal-text text-sm">{project.description}</div>
                        <div className="text-terminal-prompt text-sm">
                            Tech: {project.tech.join(', ')}
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-terminal-success hover:underline text-sm inline-block"
                        >
                            View Project →
                        </a>
                    </div>
                ))}
            </div>
        ),
    },

    contacts: {
        description: 'Get my contact information',
        execute: () => (
            <div className="space-y-2">
                <div className="text-terminal-success font-bold mb-3">Contact Information:</div>
                <div className="space-y-1">
                    <div className="flex gap-3">
                        <span className="text-terminal-accent font-bold min-w-20">Email:</span>
                        <a
                            href={`mailto:${contactData.email}`}
                            className="text-terminal-text hover:text-terminal-success hover:underline"
                        >
                            {contactData.email}
                        </a>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-terminal-accent font-bold min-w-20">GitHub:</span>
                        <a
                            href={`https://${contactData.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-terminal-text hover:text-terminal-success hover:underline"
                        >
                            {contactData.github}
                        </a>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-terminal-accent font-bold min-w-20">LinkedIn:</span>
                        <a
                            href={`https://${contactData.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-terminal-text hover:text-terminal-success hover:underline"
                        >
                            {contactData.linkedin}
                        </a>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-terminal-accent font-bold min-w-20">Twitter:</span>
                        <a
                            href={`https://${contactData.twitter}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-terminal-text hover:text-terminal-success hover:underline"
                        >
                            {contactData.twitter}
                        </a>
                    </div>
                </div>
            </div>
        ),
    },

    cv: {
        description: 'Download my CV/Resume',
        execute: () => {
            const link = document.createElement('a');
            link.href = '/CV_Samuel_Cedric.pdf';
            link.download = 'CV_Samuel_Cedric.pdf';
            link.click();

            return (
                <div className="text-terminal-success">
                    Downloading CV... Check your downloads folder!
                </div>
            );
        },
    },
};

export function parseCommand(input: string): { command: string; args: string[] } {
    const trimmed = input.trim();
    const parts = trimmed.split(/\s+/);
    const command = parts[0]?.toLowerCase() || '';
    const args = parts.slice(1);

    return { command, args };
}

export function executeCommand(input: string): React.ReactNode {
    const { command } = parseCommand(input);

    if (!command) {
        return null;
    }

    const handler = commands[command];

    if (!handler) {
        return (
            <div className="text-terminal-error">
                command not found: {command}
            </div>
        );
    }

    return handler.execute();
}
