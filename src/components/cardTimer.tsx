import { Play, Pause, RefreshCcw, Edit } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Howl } from 'howler';

import audioFile from '../audio/audio.mp3';
import { Button } from "./button";
import { Modal } from "./modal";
import { Input } from "./input";


export const CardTimer = () => {
    const [time, setTime] = useState(50 * 60)
    const [isRunning, setIsRunning] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const handleSetTime = (timeInMinutes: number) => {
        const seconds = timeInMinutes * 60;
        setTime(seconds);
    };

    const timerSound = useMemo(() => {
        const sound = new Howl({
            src: [audioFile],
            volume: 0.5,
            loop: false,
        });
        return sound;
    }, [])

    useEffect(() => {
        // divide o tempo por 60 para obter o número de minutos
        const minutes = String(Math.floor(time / 60)).padStart(2, '0');
        // e o resto da divisão por 60 para obter o número de segundos
        const seconds = String(time % 60).padStart(2, '0');
        document.title = isRunning ? `${minutes}:${seconds} - Running` : "FocusFlow";
        if (time === 0) {
            timerSound.play();
            setIsRunning(false);

        }
    }, [isRunning, time, timerSound]);

    useEffect(() => {
        let interval: number | undefined;

        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => Math.max(prevTime - 1, 0));
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning]);


    //console.log(time);

    return (
        <div className="flex flex-1 h-auto p-4 rounded-md border-2 border-slate-700  items-center justify-center">

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
                    {/* Transforma o numero para string, para que possamos usar o padStart 
                    e depois utiliza o meth flor para que o numero seja arredondado
                    sem casa decimais, o ped start garante que a string tenha pelo menos 2 caracteres
                    e se ela for menor que dois adiciona o 0 a esquerda
                    O resto da divisão (time % 60) representa os segundos restantes para completar o minuto atual.
                    Por exemplo:
                    Em 2:35 (2 minutos e 35 segundos), o resto da divisão (35) é justamente o número de segundos restantes no minuto atual.
                */}
                    {String(Math.floor(time / 60)).padStart(2, '0')}:
                    {String(time % 60).padStart(2, '0')}
                </h1>
                <div className="flex items-center gap-4">
                    <Button icon={<Play />} onClick={() => setIsRunning(true)} />
                    <Button icon={< RefreshCcw />} onClick={() => { setIsRunning(false); handleSetTime(50) }} />
                    <Button icon={<Pause />} onClick={() => setIsRunning(false)} />
                    <Button icon={<Edit />} onClick={() => setModalOpen(true)} />
                    <Modal isOpen={modalOpen} title="Alterar Tempo" onClose={() => setModalOpen(false)}>
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
                            <Input required type="number" placeholder="Tempo em minutos" onChange={(e) => setTime(Number(e.target.value))} />
                            <Button type="submit" label="Salvar" variant="primary" />
                        </form>
                    </Modal>
                </div>
            </div>
        </div>
    );
};
