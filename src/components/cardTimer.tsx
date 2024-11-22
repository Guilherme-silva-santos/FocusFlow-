import { Play, Pause, RefreshCcw, Edit } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "./button";
import { Modal } from "./modal";
import { Input } from "./input";


export const CardTimer = () => {
    const [time, setTime] = useState(50 * 60)
    const [isRunning, setIsRunning] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const handleSetTime = (time: number) => {
        const minutes = Math.floor(time * 60)
        setTime(minutes)
    }

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

    //console.log(time);

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex gap-10 mb-10">
                <Button
                    onClick={() => {
                        handleSetTime(50)
                        setIsRunning(false)
                    }}
                    variant={'secondary'}
                    label={'Pomodoro'} />
                <Button
                    onClick={() => {
                        handleSetTime(25)
                        setIsRunning(false)
                    }}
                    variant={'secondary'}
                    label={'Long Break'} />
                <Button
                    onClick={() => {
                        handleSetTime(10)
                        setIsRunning(false)
                    }}
                    variant={'secondary'}
                    label={'Short Break'} />
            </div>
            <h1 className="text-6xl font-bold text-slate-300">
                {String(Math.floor(time / 60)).padStart(2, '0')}:
                {String(time % 60).padStart(2, '0')}
            </h1>
            <div className="flex items-center gap-4">
                <Button icon={<Play />} onClick={() => setIsRunning(true)} />
                <Button icon={< RefreshCcw />} onClick={() => { setIsRunning(false); handleSetTime(50) }} />
                <Button icon={<Pause />} onClick={() => setIsRunning(false)} />
                <Button icon={<Edit />} onClick={() => setModalOpen(true)} />
                <Modal isOpen={modalOpen} title="Alterar Tempo">
                    <form
                        action=""
                        onSubmit={
                            (e) => {
                                e.preventDefault();
                                setModalOpen(false);
                                handleSetTime(time)
                            }}
                        className="flex gap-4 items-center"
                    >
                        <Input type="number" placeholder="Tempo em minutos" onChange={(e) => setTime(Number(e.target.value))} />
                        <Button type="submit" label="Salvar" variant="primary" />
                    </form>
                </Modal>
            </div>
        </div>
    );
};
