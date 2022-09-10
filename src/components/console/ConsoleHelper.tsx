import { StyleProps } from "../../types/props"
import Loader from "../loader/Loader"
import { motion } from 'framer-motion'

export interface ConsoleHelperProps extends StyleProps {
    text?: string
    loading?: boolean
}

const ConsoleHelper = (props: ConsoleHelperProps) => {
    return (
        <div className={props.className}>
            <div className="w-full h-full flex flex-row gap-2 items-center justify-start sm:pt-0 pt-2">
                { props.loading &&
                    <Loader />
                }

                <motion.div 
                    key={props.text}
                    initial={{ y: '20px', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}  
                    className="text-[.8rem] text-white/40 leading-3"
                >{props.text}</motion.div>
            </div>
        </div>
    )
}

export default ConsoleHelper