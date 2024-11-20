type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | undefined;
  label?: string;
  onClick?: () => void;
};


export const Button: React.FC<ButtonProps> = ({ icon, variant='primary', label, onClick, ...rest }) => {
  const getButtonClass = () => {
    switch (variant) {
      case 'primary':
        return "bg-slate-700 opacity-50 text-slate-400 font-bold text-sm px-4 py-2 rounded-md ";
      case 'secondary':
        return "gap-1.5 text-slate-500 font-bold text-xl transition-opacity duration-200 ray-800 hover:text-slate-400";
      default:
        return "";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`${getButtonClass()}`}
      {...rest}
    >
      {icon}
      {label}
    </button>
  );
};
