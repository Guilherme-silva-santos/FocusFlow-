import { Languages, SunMoon } from 'lucide-react';

import { CardTimer } from '../components/cardTimer';
import { ToDoCard } from '../components/toDoCard';
import { Header } from "../components/header";
import { Button } from "../components/button";


export default function Pomodoro() {
  return (
    <div>
      <Header/>
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
           <CardTimer />
           <ToDoCard />
      </main>
    </div>
  );
}
