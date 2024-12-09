import { Plus } from "lucide-react";
import { useState } from "react";

import Checkbox from "./checkbox";
import { Button } from "./button";
import { Modal } from "./modal";
import { Input } from "./input";


export const ToDoCard = () => {
    const [task, setTask] = useState([
        {
            id: 1,
            name: "Revisar documentação do projeto",
            createdAt: new Date("2024-12-01T09:30:00"),
        },
        {
            id: 2,
            name: "Realizar reunião com o time de design",
            createdAt: new Date("2024-12-02T10:15:00"),
        },
        {
            id: 3,
            name: "Implementar autenticação no sistema",
            createdAt: new Date("2024-12-03T11:45:00"),
        },
        {
            id: 4,
            name: "Testar integração da API",
            createdAt: new Date("2024-12-04T14:00:00"),
        },
        {
            id: 5,
            name: "Corrigir bugs reportados no front-end",
            createdAt: new Date("2024-12-05T16:20:00"),
        },
        {
            id: 6,
            name: "Atualizar dependências do projeto",
            createdAt: new Date("2024-12-06T13:10:00"),
        },
        {
            id: 7,
            name: "Preparar apresentação para o cliente",
            createdAt: new Date("2024-12-07T08:50:00"),
        },
    ])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTaskName, setNewTaskName] = useState("");

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault()
        if (!newTaskName.trim()) return 

        const newTask = {
            id: task.length + 1, 
            name: newTaskName,
            createdAt: new Date(),
        };

        setTask((prevTasks) => [...prevTasks, newTask]) 
        setNewTaskName(""); 
        setIsModalOpen(false)
    };

    return (
        <div className="flex flex-col gap-4 flex-1 h-auto p-2 rounded-md border-2 border-slate-700">
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <h1 className="text-xl text-slate-300 font-bold">Lista de Tarefas</h1>
                    <p className="font-bold text-slate-600">Seus objetivos para essa sessão</p>
                </div>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Criar Tarefa">
                    <form onSubmit={handleAddTask}>
                        <Input required type="text" placeholder="Nome da tarefa" value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} />
                        <Button type="submit">Adicionar</Button>
                    </form>
                </Modal>
                <div>
                    <Button icon={<Plus />} onClick={() => setIsModalOpen(true)} />
                </div>
            </div>
            <div className="border-t-2 border-slate-500" />
            <div className="overflow-y-scroll max-h-56">
                {
                    task.map((task) => (
                        <li key={task.id} className="list-none gap-4 p-4 hover:bg-slate-500/10">
                            <Checkbox label={task.name} />
                            <p className="text-slate-500">{task.createdAt.toLocaleDateString()}</p>
                        </li>
                    ))
                }
            </div>
        </div>
    );
};