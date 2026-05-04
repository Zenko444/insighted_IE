import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      'rounded-md relative bg-paper-200 overflow-hidden h-80 md:h-[28rem] w-full transition-all duration-500 ease-out',
      hovered !== null && hovered !== index && 'blur-sm scale-[0.98]'
    )}
  >
    <img src={card.src} alt={card.title} className="object-cover absolute inset-0 w-full h-full" />
    <div
      className={cn(
        'absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/50 to-transparent flex flex-col justify-end p-6 transition-opacity duration-500',
        hovered === index ? 'opacity-100' : 'opacity-0'
      )}
    >
      <div className="text-2xl md:text-3xl font-display font-light text-white">{card.title}</div>
      {card.subtitle && <div className="text-lg text-signal-200 mt-2 font-extralight">{card.subtitle}</div>}
    </div>
  </div>
));

Card.displayName = 'Card';

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {cards.map((card, index) => (
        <Card key={card.title} card={card} index={index} hovered={hovered} setHovered={setHovered} />
      ))}
    </div>
  );
}
