import { useReducer, useEffect } from 'react'

export default (key, initialVal, reducer) => {
    const [state, dispatch] = useReducer(reducer, initialVal, () => {
        try {
            return JSON.parse(window.localStorage.getItem(key) || String(initialVal))
        } catch (e) {
            return initialVal
        }
    })

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [state, key])

    return [state, dispatch]
}
