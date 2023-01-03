import React, { useState, useEffect } from "react";

function TimerDenji() {
    const [totalTimeInSeconds, setTotalTimeInSeconds] = useState ( 6 * 60 );

    const minutes = Math.floor (totalTimeInSeconds / 60 );
    const seconds = totalTimeInSeconds % 60

    useEffect(() => {
        if (totalTimeInSeconds === 0) {
            return
        } else {
            setTimeout(() => {
                setTotalTimeInSeconds(totalTimeInSeconds - 1)
            }, 1000)
        }
    }, [totalTimeInSeconds])

    return (
        <div>
            <span>{minutes.toString().padStart(2, "0")}</span>
            <span>:</span>
            <span>{seconds.toString().padStart(2, "0")}</span>
            <div className="button-wrap">
                <button className="button-start">Começar</button>
                <button className="button-stop">Parar</button>
            </div>
        </div>
    )
}

export default TimerDenji;