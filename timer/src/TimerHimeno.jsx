import React, { useState, useEffect } from "react";

function TimerHimeno() {
    const [totalTimeInSeconds, setTotalTimeInSeconds] = useState ( 4 * 60 );

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
        <div className="timerContainer">
            <img className="imgHimeno" src="https://64.media.tumblr.com/81f2203f2651d72abe407717db40a7f2/f8c7b85690179dc9-66/s640x960/a1237d443072f1d7b63319146b880edf3d5809fb.gif" />
            <div className="contador">
            <span>{minutes.toString().padStart(2, "0")}</span>
            <span>:</span>
            <span>{seconds.toString().padStart(2, "0")}</span>
            </div>
        </div>
    )
}

export default TimerHimeno;