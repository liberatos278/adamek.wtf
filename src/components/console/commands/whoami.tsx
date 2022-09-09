import { Command } from "../../../types/command"

export const run = (command: Command): JSX.Element => {
    return (
        <div className="w-full h-auto flex flex-row items-center justify-around">
            <div className="flex flex-col">
                <p className="text-white/60 text-[2rem] font-bold m-0">Hi, my name is Adam</p>
                <p className="text-white/50 m-0">I'm fullstack web developer based in the Czech Republic.</p>
            </div>
            <img src="/portfolio_img.png" width="25%" height="25%" alt="Portfolio" />
        </div>
    )
}