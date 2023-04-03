const English = ({
    className
} : { className : string }) => (
    <img
    src="flags/English.svg"
    className={className}
    />
)

const Turkish = ({
    className
} : { className : string }) => (
    <img
    src="flags/Turkish.svg"
    className={className}
    />
)

export const Flags = {
    "en" : English,
    "tr" : Turkish
}