import { Command } from "../../../types/command"

export const run = (command: Command): JSX.Element => {
    return (
        <div className="w-full h-auto">
            <p className="text-white/50 m-0">
                <b>whoami</b> - <i>Displays information about the current user.</i><br />
                <b>skills</b> - <i>Displays information about my skills.</i><br />
                <b>echo</b> - <i>Displays messages.</i><br />
                <b>pwd</b> - <i>Displays the name of the current directory.</i><br />
                <b>cd</b> [path] - <i>It will show the required path - can be used with "discord", "github", ...</i><br />
                <b>help</b> - <i>Displays information about commands.</i><br />
                <b>clear</b> - <i>Clears the screen.</i><br />
            </p>
        </div>
    )
}