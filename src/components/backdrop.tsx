export function Backdrop() {
    return (
        <div className="fixed inset-0 -z-50 h-full w-screen ">
            <div
                className="absolute -z-40 h-[100%] w-[100%] opacity-[0.05]"
                style={{
                    transform: `translate(0%, 0%)`,
                    background: `url('/noise.webp')`
                }}
            />
        </div>
    )
}