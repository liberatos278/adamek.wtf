import { useState } from "react"
import ConsoleBoard from "./ConsoleBoard"
import { handle } from "./ConsoleHandler"
import ConsoleHelper, { ConsoleHelperProps } from "./ConsoleHelper"
import ConsoleInput from "./ConsoleInput"
import SentCommand from "./SentCommand"

const Console = () => {
    const [boardElements, setBoardElements] = useState<JSX.Element[]>([])
    const [helper, setHelper] = useState<ConsoleHelperProps>({ 
        text: 'Initializing...',
        loading: true 
    })

    const handleCommand = async (command: string) => {
        const result = await handle(command)

        setBoardElements(e => [...e, <SentCommand command={command} />])

        if (result === 'clear') {
            setBoardElements([])
            return
        }
        
        if (result)
            setBoardElements(e => [...e, result])
    }

    const handleSelfwritingCompleted = () => {
        setHelper({ text: 'Type "help" to get started or enter any valid command', loading: false })
    }

    return (
        <div className="w-4/5 lg:w-2/5 md:w-3/5 sm:w-4/5 h-2/4 min-h-[480px] p-3 rounded-2xl bg-white/[.04] shadow-[1px_1px_10px_10px_rgba(0,0,0,0.1)] backdrop-blur-md">
            
            {/* Console sections in flexbox */}
            <div className="w-full h-full flex flex-col">
                
                {/* Console content */}
                <div className="w-full h-5/6">
                    <ConsoleBoard className="w-full h-full p-1" elements={boardElements} />
                </div>

                {/* Console input */}
                <div className="w-full h-1/6 flex flex-col from-current">
                    
                    {/* Input */}
                    <div className="w-full h-4/6">
                        <ConsoleInput className="w-full h-full pt-2 pb-1" onSend={handleCommand} onSelfwritingCompleted={handleSelfwritingCompleted} />
                    </div>

                    {/* Help box */}
                    <div className="w-full h-2/6">
                        <ConsoleHelper className="w-full h-full" {...helper} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Console