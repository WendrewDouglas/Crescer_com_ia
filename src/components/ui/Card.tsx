interface CardProps {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
}

export default function Card({ children, className = "", highlighted = false }: CardProps) {
  return (
    <div
      className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        highlighted
          ? "border-primary bg-primary/5 shadow-md ring-2 ring-primary/20"
          : "border-border bg-white shadow-sm"
      } ${className}`}
    >
      {children}
    </div>
  );
}
