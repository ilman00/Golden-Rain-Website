import type{ ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "outline" | "ghost";

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  to?: undefined;
}

interface ButtonAsLink extends BaseProps {
  to: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;
 
const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold text-black hover:bg-gold-dark border border-gold hover:border-gold-dark",
  outline:
    "bg-transparent text-white border border-white/30 hover:border-gold hover:text-gold",
  ghost:
    "bg-transparent text-black border border-transparent hover:text-gold-dark",
};
 
const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 font-body text-sm font-semibold tracking-wide uppercase transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";
 
export default function Button(props: ButtonProps) {
  const { variant = "primary", children, className = "" } = props;
  const classes = `${base} ${variantClasses[variant]} ${className}`;
 
  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }
 
  const { to, ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}