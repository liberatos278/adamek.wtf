import React, { useEffect } from "react"
import { useState } from "react"
import ConsoleBoard from "./ConsoleBoard"
import { handle } from "./ConsoleHandler"
import ConsoleHelper, { ConsoleHelperProps } from "./ConsoleHelper"
import ConsoleInput from "./ConsoleInput"
import SentCommand from "./SentCommand"
import { motion } from "framer-motion"
import { helperHints } from "./HelperSource"

let delayRounds = 2, delaying = true, delayedRounds = 0

const Console = () => {
    const [boardElements, setBoardElements] = useState<JSX.Element[]>([])
    // const [commandHistory, setCommandHistory] = useState<string[]>([])
    const [helper, setHelper] = useState<ConsoleHelperProps>({
        text: 'Initializing...',
        loading: true
    })
    const [helperData, setHelperdData] = useState({
        wasSkillsUsed: false,
    })

    useEffect(() => {
        setInterval(() => {
            console.log()

            if (delaying)
                delayedRounds++

            if (delayedRounds >= delayRounds) {
                delaying = false
                delayedRounds = 0
                delayRounds = 0
            }

            if (!delaying) {
                const randomText = helperHints[Math.floor(Math.random() * helperHints.length)]
                setHelper({ text: randomText, loading: false })
            }
        }, 30000)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const waitHelper = (rounds: number) => {
        delayRounds = rounds
        delaying = true
        delayedRounds = 0
    }

    const handleCommand = async (command: string) => {
        const result = await handle(command)

        if (!result.command)
            return

        setBoardElements(e => [...e, <SentCommand command={command} />])

        if (result.output === 'clear') {
            setBoardElements([])
            return
        }

        if (result.command.command === 'skills') {
            if (!helperData.wasSkillsUsed) {
                setHelper({ text: 'Type "help" to get list of valid commands', loading: false })
                waitHelper(1)
            }

            setHelperdData(d => ({ ...d, wasHelpUsed: true }))
        }

        if (React.isValidElement(result.output)) {
            const newElement = result.output as JSX.Element

            // setCommandHistory(e => [...e, command])
            setBoardElements(e => [...e, newElement])

            const newHelper = 'You can type the command "clear" to clear the console'
            if (boardElements.length > 8 && helper.text !== newHelper) {
                setHelper({ text: newHelper, loading: false })
                waitHelper(1)
            }
        }
    }

    const handleSelfwritingCompleted = () => {
        setHelper({ text: 'Now try the "skills" command, which will tell you more about me!', loading: false })
    }

    return (
        <motion.div
            className="w-5/6 lg:w-2/5 md:w-3/5 sm:w-5/6 h-3/6 sm:h-3/6 md:h-3/5 lg:h-3/5 min-h-[380px] md:min-h-[480px] p-3 rounded-2xl bg-white/[.04] shadow-[1px_1px_10px_10px_rgba(0,0,0,0.1)] backdrop-blur-md"
            initial={{ y: 0 }}
            animate={{ y: ['0px', '-60px', '0px'] }}
            transition={{ duration: 0.6, type: "spring", delay: 3.2 }}
        >

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
        </motion.div>
    )
}

export default Console