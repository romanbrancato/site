export const SplitText = ({text, className = ''}: { text: string, className?: string }) => (
    <p>
        {text.split(' ').map((word, i) => (
            <span key={`${word}-${i}`} className={`${className}`}>
                {word}{' '}
            </span>
        ))}
    </p>
);