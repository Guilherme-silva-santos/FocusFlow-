import { Play, Pause, RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "./button";


export const CardTimer = () => {
    const [time, setTime] = useState(50 * 60)
    const [isRunning, setIsRunning] = useState(false)

    const handleSetTime = (newTime: number) => {
        setTime(newTime);
        setIsRunning(false);
      };

    useEffect(() => {
        let interval: number | undefined
        const start = Date.now()
        const end = start + time * 1000

        if (isRunning) {
            interval = setInterval(() => {
                const now = Date.now()
                const remainingTime = Math.max(Math.round((end - now) / 1000), 0)
                setTime(remainingTime)

                if (remainingTime <= 0) {
                    clearInterval(interval)
                }
            }, 1000)
        }

        return () => clearInterval(interval)
    }, [isRunning, time]);

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex gap-10 mb-10">
                <Button
                    onClick={() => {
                        handleSetTime(25 * 60)
                        setIsRunning(false)
                    }}
                    variant={'secondary'}
                    label={'Pomodoro'} />
                <Button
                    onClick={() => {
                        handleSetTime(10 * 60)
                        setIsRunning(false)
                    }}
                    variant={'secondary'}
                    label={'Long Break'} />
                <Button
                    onClick={() => {
                        handleSetTime(25 * 60)
                        setIsRunning(false)
                    }}
                    variant={'secondary'}
                    label={'Short Break'} />
                <Button
                    variant={'secondary'}
                    label={'Custimize Timer'} />
            </div>
            <h1 className="text-6xl font-bold text-slate-300">
                {String(Math.floor(time / 60)).padStart(2, '0')}:
                {String(time % 60).padStart(2, '0')}
            </h1>
            <div className="flex items-center gap-4">
                <Button icon={<Play />} onClick={() => setIsRunning(true)} />
                <Button icon={< RefreshCcw />} onClick={() => {setIsRunning(false); setTime(50 * 60)}} />
                <Button icon={<Pause />} onClick={() => setIsRunning(false)} />
            </div>
        </div>
    );
};
