import { useEffect, useRef } from "react"
import { StyleProps } from "../../types/props"

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
                            return <div key={i} ref={lastRef} className="w-full h-auto">{e}</div>
                        else
                            return <div key={i} className="w-full h-auto">{e}</div>
                    })
                }
            </div>
        </div>
    )
}

export default ConsoleBoard