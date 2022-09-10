import { Command } from "../../../types/command"

export const run = (command: Command): JSX.Element => {
    return (
        <div className="w-full h-auto">
            <p className="text-white/50 m-0 break-words">{ command.args.join(' ') }</p>
        </div>
    )
}