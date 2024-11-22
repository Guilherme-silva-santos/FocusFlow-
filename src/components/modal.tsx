interface ModalProps {
    children: React.ReactNode;
    isOpen?: boolean;
    title?: string;
}
export const Modal: React.FC<ModalProps> = ({ children, isOpen, title }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed flex flex-col justify-center p-4 rounded-md w-[300px] h-[200px] bg-slate-800  z-50">
            <h2 className="text-lg font-bold text-slate-500">{title}</h2>
            {children}
        </div>

    )
}