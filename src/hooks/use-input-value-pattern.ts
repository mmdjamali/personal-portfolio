import { useDebounce } from "@uidotdev/usehooks"
import { useEffect, useState } from "react"

export type PatternType = {
    pattern: RegExp,
    message: string
}

type Paramater = {
    defaultValue: string,
    delay?: number,
    patterns: PatternType[],
    skipMount?: boolean
}

const useInputValuePattern = ({ defaultValue, patterns, delay = 500, skipMount = false }: Paramater) => {
    const [mounted, setMounted] = useState(skipMount)
    const [value, setValue] = useState<string>(defaultValue)
    const debouncedValue = useDebounce(value, delay)
    const [error, setError] = useState<string>("")

    useEffect(() => {
        if (!mounted) return

        const isOk = patterns.every(({ message, pattern }) => {
            if (!pattern.test(debouncedValue)) {
                setError(message);
                return false;
            }
            return true;
        });

        if (isOk) setError("");
        /*eslint-disable*/
    }, [debouncedValue]);

    useEffect(() => {
        if (!mounted) setMounted(true)
    }, [])

    const register = () => ({
        value: value,
        onChange: (
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
            setValue(e.target.value);
        },
    });

    return [debouncedValue, register, error] as const
}

export default useInputValuePattern