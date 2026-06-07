interface BadgeProps {
  label: string;
  dotColor?: string;
}

export function Badge({ label, dotColor }: BadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-white/80">
      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: dotColor }} />
      {label}
    </div>
  );
}
