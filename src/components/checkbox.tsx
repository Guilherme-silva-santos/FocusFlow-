interface CheckboxProps {
  label: string
  checked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 accent-blue-500"
      />
      <span className="text-slate-400 font-medium">{label}</span>
    </label>
  );
};

export default Checkbox;
