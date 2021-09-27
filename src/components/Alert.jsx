import React, { useEffect } from 'react'
import "./alert.css"

const Alert = ({ type, msg, removeAlert, list }) => {

    useEffect(() => {
        const timeOut = setTimeout(() => {
            removeAlert()
        },2000)
        return () => clearTimeout(timeOut)
    },[list])
    return (
        <div>
            <p className={`${type}`}>{msg}</p>
        </div>
    )
}

export default Alert
