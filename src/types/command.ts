export interface Command {
    raw: string
    command: string
    args: string[]
}

export interface CommandModule {
    run: (command: Command) => JSX.Element
}

export interface CommandHandlerOutput {
    command: Command | null
    output?: JSX.Element | CommandAction | null
}

export type CommandAction = 'clear'
