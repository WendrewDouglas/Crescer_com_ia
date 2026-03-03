import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost";

type BaseProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-cta text-foreground hover:bg-cta-hover font-semibold shadow-md hover:shadow-lg",
  outline:
    "border-2 border-white text-white hover:bg-white/10 font-semibold",
  ghost:
    "text-primary hover:bg-primary/5 font-medium",
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm transition-all duration-200 cursor-pointer ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as ButtonAsAnchor;
    return (
      <a href={href} className={base} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={base} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
