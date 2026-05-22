'use client';

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}

export default function Field({
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
}: FieldProps) {
  return (
    <div>
      <label className="block text-paper/60 text-xs uppercase tracking-wider mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-deep border border-gold/15 text-paper text-sm px-3 py-2.5 focus:outline-none focus:border-gold/50 transition-colors"
      />
    </div>
  );
}
