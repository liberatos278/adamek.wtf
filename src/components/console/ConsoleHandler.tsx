import { CommandHandlerOutput, CommandModule } from "../../types/command"
import { evaluate } from 'mathjs'

export const handle = async (raw: string): Promise<CommandHandlerOutput> => {
    if (!raw.length)
        return { command: null, output: null }

    const arr = raw.trim().split(/\s+/)
    const command = arr[0].toLowerCase()
    const args = arr.slice(1)

    try {
        const m: CommandModule = await import(`./commands/${command}`)
        return {
            output: m.run({ command, args, raw }),
            command: { command, args, raw }
        }

    } catch (err: unknown) {
        try {
            const math = await evaluate(raw)
            return {
                output: <div className="w-full h-auto text-white/50">{math}</div>,
                command: { command, args, raw }
            }

        } catch (err: unknown) {
            const invalid: CommandModule = await import('./InvalidCommand')
            return {
                output: invalid.run({ command, args, raw }),
                command: { command, args, raw }
            }
        }
    }
}