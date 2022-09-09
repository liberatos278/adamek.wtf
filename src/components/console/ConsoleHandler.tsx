import { CommandAction, CommandModule } from "../../types/command"

export const handle = async (raw: string): Promise<JSX.Element | CommandAction | undefined> => {
    if (!raw.length)
        return

    const arr = raw.toLowerCase().trim().split(/\s+/)
    const command = arr[0]
    const args = arr.slice(1)

    try {
        const m: CommandModule = await import(`./commands/${command}`)
        return m.run({ command, args, raw })
    
    } catch (err: unknown) {
        const invalid: CommandModule = await import('./InvalidCommand')
        return invalid.run({ command, args, raw })          	
    }
}