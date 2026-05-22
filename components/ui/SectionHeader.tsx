'use client';

interface SectionHeaderProps {
  marker?: string;
  eyebrow: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  marker,
  eyebrow,
  title,
  lead,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      <div className={`flex items-center gap-3 mb-6 ${align === 'center' ? 'justify-center' : ''}`}>
        {marker && <span className="marker">{marker}</span>}
        <span className="w-12 h-px bg-gold"></span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2
        className="display text-paper text-4xl md:text-5xl lg:text-6xl mb-6"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {lead && <p className="text-paper/65 text-lg leading-relaxed font-light">{lead}</p>}
    </div>
  );
}
