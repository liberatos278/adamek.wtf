import { Command } from "../../../types/command"

export const run = (command: Command): JSX.Element => {

    const path = command.args[0]

    if (!path)
        return (
            <div className="w-full h-auto text-white/50">
                Path was not specified
            </div>
        )

    switch (command.args[0]) {
        case 'github':
            window.open('https://github.com/liberatos278', '_blank')
            break;

        case 'linkedin':
            window.open('https://www.linkedin.com/in/adam-svoboda-36333a234/', '_blank')
            break;

        case 'instagram':
            window.open('https://www.instagram.com/ad.svoboda/', '_blank')
            break;

        case 'discord':
            window.open('https://discord.com/users/471020198040829953', '_blank')
            break;

        default:
            return (
                <div className="w-full h-auto text-white/50">
                    Undefined path
                </div>
            )
    }

    return <></>
}