import { Command } from "../../types/command"

export const run = (command: Command): JSX.Element => {
    return (
        <div className="w-full h-auto flex flex-col mb-2">
            <div className="text-white/50 font-bold">Invalid command</div>
            <div className="text-white/40">"{command.command}" is not recognized as an internal or external command, operable program or batch file.</div>
        </div>
    )
}