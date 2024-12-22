export const HoverText = ({ text, className = '' }: { text: string, className?: string }) => (
    <p>
        {text.split(' ').map((word, i) => (
            <span key={`${word}-${i}`} className={`${className}`}>
        {word}{i < text.split(' ').length - 1 ? ' ' : ''}
      </span>
        ))}
    </p>
);