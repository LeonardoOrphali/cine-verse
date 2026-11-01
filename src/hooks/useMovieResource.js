import { useEffect, useState } from 'react'

// Callers keep load stable and remount keyed resources when their movie/genre changes.
export default function useMovieResource(load) {
    const [resource, setResource] = useState({ data: [], status: 'loading' })
    const [attempt, setAttempt] = useState(0)

    useEffect(() => {
        const controller = new AbortController()
        Promise.resolve().then(() => load(controller.signal)).then(
            data => {
                if (!controller.signal.aborted) setResource({ data, status: 'success' })
            },
            () => {
                if (!controller.signal.aborted) setResource({ data: [], status: 'error' })
            },
        )
        return () => controller.abort()
    }, [load, attempt])

    function retry() {
        setResource({ data: [], status: 'loading' })
        setAttempt(value => value + 1)
    }

    return { ...resource, retry }
}
