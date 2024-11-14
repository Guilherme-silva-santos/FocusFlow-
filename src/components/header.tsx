import { Clock10, User2Icon } from 'lucide-react';

import { NavLink } from './navLink';


export const Header = () => {
    return (
        <div className="border-b border-gray-700">
            <div className='h-16 flex items-center gap-6 px-6 bg'>
                <Clock10 className="w-6 h-6" color='#94a3b8' />
                <div className="border-l-2 border-gray-700 h-10"/>
                <nav className='flex items-center space-x-4 lg:space-x-6'>
                    <NavLink to={'/'}>
                        <p className='text-sm font-bold text-slate-400'>Pomodoro</p>
                    </NavLink>
                    <NavLink to='/tasks'>
                        <p className='text-sm font-bold text-slate-400'>Tarefas</p>
                    </NavLink>
                </nav>
                <div className='ml-auto flex items-center gap-4'>
                    <NavLink to='/profile'>
                        <User2Icon className="w-6 h-6" color='#94a3b8'  />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}