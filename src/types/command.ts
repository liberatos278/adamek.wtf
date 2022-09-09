export interface Command {
    raw: string
    command: string
    args: string[]
}

export interface CommandModule {
    run: (command: Command) => JSX.Element
}

export type CommandAction = 'clear'
