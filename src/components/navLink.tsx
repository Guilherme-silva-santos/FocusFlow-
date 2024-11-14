import { Link, LinkProps, useLocation } from 'react-router-dom';


export type NavLinkProps = LinkProps;

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation();

  const isActive = pathname === props.to;

  return (
    <Link
      className={`flex items-center gap-1.5 text-sm font-medium transition-opacity duration-200 
        ${isActive ? 'text-slate-700 font-bold opacity-100' : 'text-slate-500 opacity-50 hover:opacity-75 hover:text-slate-700'}`}
      {...props}
    />
  );
}
