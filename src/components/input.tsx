interface InputProps{
    label?: string;
    placeholder?: string;
    type: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export const Input: React.FC<InputProps> = ({ placeholder, type, value, onChange, required }) => {
    return (
        <div className="flex flex-col gap-1">
            <input
                required={required}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="rounded-md border-2 border-slate-300 p-1 text-sm text-slate-600"
            />
        </div>
    );
};