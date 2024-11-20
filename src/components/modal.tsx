import { Button } from "./button";


interface ModalProps {
    children: React.ReactNode;
    onClose?: () => void;
    isOpen?: boolean;
}
export const Modal: React.FC<ModalProps> = ({ children, onClose, isOpen }) => {
    if(!isOpen) return null;
    return (
        <div className="fixed flex flex-col rounded-md ml-6 mb-10 items-center w-[200px] h-[150px] bg-slate-500 z-50"> 
            {children}
            <Button onClick={onClose}>Close</Button>
        </div>
    )
}