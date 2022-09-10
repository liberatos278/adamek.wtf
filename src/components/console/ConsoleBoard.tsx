import { useEffect, useRef } from "react"
import { StyleProps } from "../../types/props"
import { motion } from 'framer-motion'

export interface ConsoleBoardProps extends StyleProps {
    elements: JSX.Element[]
}

const ConsoleBoard = (props: ConsoleBoardProps) => {
    const lastRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (lastRef && lastRef.current) {
            lastRef.current.scrollIntoView()
        }
    }, [props.elements])

    return (
        <div className={props.className}>
            <div className="w-full h-full overflow-y-auto">
                {
                    props.elements.map((e: JSX.Element, i) => {
                        if (i === props.elements.length - 1)
                            return (
                            <motion.div 
                                key={i} 
                                ref={lastRef} 
                                className="w-full h-auto"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.2, type: "tween" }}
                            >{e}</motion.div>
                            )
                        else
                            return <div key={i} className="w-full h-auto">{e}</div>
                    })
                }
            </div>
        </div>
    )
}

export default ConsoleBoard