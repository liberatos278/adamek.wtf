export interface SentCommandProps {
    command: string
}

const SentCommand = (props: SentCommandProps) => {
    return (
        <div className="w-full h-auto text-white/25 tracking-widest pt-1">
            <span>{">"} {props.command}</span>
        </div>
    )
}

export default SentCommand