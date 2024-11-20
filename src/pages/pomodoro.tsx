import { Languages, Rocket, SunMoon } from 'lucide-react';

import { CardTimer } from '../components/cardTimer';
import Checkbox from '../components/checkbox';
import { Header } from "../components/header";
import { Button } from "../components/button";


export default function Pomodoro() {
  return (
    <div>
      <Header />
      <div className="flex items-center gap-6 px-40 py-12 justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-300">Pomodoro</h1>
          <span className="font-bold text-slate-400">Gerencie seu tempo de maneira mágica!</span>
        </div>
        <div className="flex items-center gap-4">
          <Button icon={<SunMoon />} onClick={() => alert('click')} />
          <Button icon={<Languages />} onClick={() => alert('click')} />
        </div>
      </div>
      <main className="flex gap-6 px-40 ">
        <div className="flex-1 h-auto p-4 rounded-md border-2 border-slate-700 items-center justify-center">
          <CardTimer />
        </div>
        <div className="flex flex-col gap-4 flex-1 h-auto p-2 rounded-md border-2 border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-xl text-slate-300 font-bold">Lista de Tarefas</h1>
              <p className="font-bold text-slate-600">Seus objetivos para essa sessão</p>
            </div>
            <div>
              <Button icon={<Rocket />} onClick={() => alert('click')} />
            </div>
          </div>
          <div className="border-t-2 border-slate-500 my-2" />
          <div>
            <Checkbox label="Tarefa 1" />
          </div>
        </div>
      </main>
    </div>
  );
}
