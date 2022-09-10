import { Command } from "../../../types/command"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngular, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons"

export const run = (command: Command): JSX.Element => {
    return (
        <div className="w-full h-auto flex flex-col gap-[2rem] pb-5">
            <div className="text-white/50">
                I have experience in web development in Angular or React (I prefer in TypeScript). I do back-end development mostly in Node.js.
            </div>
            <div className="flex flex-row items-center justify-center gap-5">
                <FontAwesomeIcon icon={faReact} size="3x" className="text-[#61DBFB]/80" />
                <FontAwesomeIcon icon={faAngular} size="3x" className="text-[#A6120D]/80" />
                <FontAwesomeIcon icon={faNodeJs} size="3x" className="text-[#3C873A]/80" />
            </div>
        </div>
    )
}