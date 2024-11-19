import { Play, Pause } from "lucide-react";

import { Button } from "./button";


export const CardTimer = () => {
    return (
        <div className="flex flex-col items-center gap-4 p-6">
            <h1 className="text-6xl font-bold text-slate-300">
                03:56
            </h1>
            <div className="flex items-center gap-4">
                <Button icon={<Play />} onClick={() => alert('click')} />
                <Button icon={<Pause />} onClick={() => alert('click')} />
            </div>
        </div>
    );
};
