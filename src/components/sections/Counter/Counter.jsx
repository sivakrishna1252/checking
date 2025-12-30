import { useState, useEffect } from 'react';
import './Counter.css';

function Counter({ targetValue, label, duration = 2000 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        let animationFrameId;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easedProgress = progress < 0.5
                ? 2 * progress * progress
                : -1 + (4 - 2 * progress) * progress;

            const currentCount = Math.floor(targetValue * easedProgress);
            setCount(currentCount);

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCount(targetValue);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [targetValue, duration]);

    return (
        <div className="counter-item">
            <div className="counter-value">{count}+</div>
            <div className="counter-label">{label}</div>
        </div>
    );
}

export default Counter;
