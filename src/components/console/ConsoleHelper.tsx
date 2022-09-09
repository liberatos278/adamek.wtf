import { StyleProps } from "../../types/props"
import Loader from "../loader/Loader"

export interface ConsoleHelperProps extends StyleProps {
    text?: string
    loading?: boolean
}

const ConsoleHelper = (props: ConsoleHelperProps) => {
    return (
        <div className={props.className}>
            <div className="w-full h-full flex flex-row gap-2 items-center justify-start">
                { props.loading &&
                    <Loader />
                }
                <div className="text-[.8rem] text-white/40">{props.text}</div>
            </div>
        </div>
    )
}

export default ConsoleHelper