import { useEffect, useState } from "react"
import { StyleProps } from "../../types/props"

export interface ConsoleInputProps extends StyleProps {
    onSend?: (value: string) => void,
    onSelfwritingCompleted?: () => void
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const ConsoleInput = (props: ConsoleInputProps) => {
    const [inputValue, setInputValue] = useState('')
    const [disableInput, setDisableInput] = useState(true)

    useEffect(() => {
        const selfwrite = async () => {
            const selfwritingOptions = {
                string: "whoami",
                delay: 1000,
                beforeSendDelay: 500,
                timeForLetter: 250
            }
    
            setInputValue('')
            await sleep(selfwritingOptions.delay)

            for (const letter of selfwritingOptions.string) {
                setInputValue(i => i + letter)
                await sleep(selfwritingOptions.timeForLetter)
            }

            await sleep(selfwritingOptions.beforeSendDelay)

            sendCommand(selfwritingOptions.string)
            setDisableInput(false)

            if (props.onSelfwritingCompleted)
                props.onSelfwritingCompleted()
        }
 
        selfwrite()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter')
            sendCommand(inputValue)
    }

    const sendCommand = (command: string) => {
        if (props.onSend) 
            props.onSend(command)

        setInputValue('')
    }

    return (
        <div className={props.className}>
            <div className="w-full h-full relative text-white/60">
                <div className="absolute pl-2 pt-1 text-white/40 text-sm top-1/2 transform -translate-y-1/2">
                    <span className="tracking-widest select-none">F:\Visitors{'>'}</span>
                </div>
                <input 
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    spellCheck={false}
                    maxLength={400}
                    disabled={disableInput} 
                    className="w-full h-full rounded-md bg-white/[.05] outline-none pl-[6.5rem] pr-2" 
                />
            </div>
        </div>
    )
}

export default ConsoleInput