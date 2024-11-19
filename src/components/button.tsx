
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode; // Propriedade adicional específica do seu botão
};

export const Button: React.FC<ButtonProps> = ({ icon, onClick, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className="bg-slate-700 opacity-50 text-slate-400 font-bold text-sm px-4 py-2 rounded-md "
      {...rest}
    >
      {icon}
    </button>
  );
};
