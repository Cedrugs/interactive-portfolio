export interface CommandOutput {
	command: string;
	output: React.ReactNode;
	timestamp: number;
}

export interface CommandHandler {
	description: string;
	execute: () => React.ReactNode;
}

export interface NeofetchData {
	username: string;
	hostname: string;
	os: string;
	shell: string;
	terminal: string;
	cpu: string;
	memory: string;
	uptime: string;
}

export interface Experience {
    position: string;
    period: string;
    description: string;
}

export interface ExperienceData {
    [company: string]: Experience[];
}
