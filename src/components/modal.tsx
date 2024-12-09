import { X } from "lucide-react";


interface ModalProps {
    children: React.ReactNode;
    isOpen?: boolean;
    title?: string;
    onClose?: () => void;
}
export const Modal: React.FC<ModalProps> = ({ children, isOpen, title, onClose }) => {
    if (!isOpen) return null;
    return (
        <div>
            <div className="fixed rounded-md w-auto h-auto bg-slate-800 z-50">
                <div className="pt-2">
                    <button onClick={onClose} >
                        <X size={20} color="#94a3b8" />
                    </button>
                </div>
                <div className="flex flex-col justify-center p-4">
                    <h2 className="text-lg font-bold text-slate-500">{title}</h2>
                    {children}
                </div>
            </div>
        </div>

    )
}