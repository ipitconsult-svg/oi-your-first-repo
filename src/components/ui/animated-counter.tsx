import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: string | number;
  duration?: number;
  className?: string;
}

export const AnimatedCounter = ({ 
  value, 
  duration = 2000,
  className = "" 
}: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    if (typeof value === "string") {
      setDisplayValue(value as any);
      return;
    }

    let startTime: number;
    const startValue = 0;
    const endValue = Number(value);

    const updateValue = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (endValue - startValue) * easeOut);
      
      setDisplayValue(current);
      
      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };

    requestAnimationFrame(updateValue);
  }, [value, duration]);

  return (
    <span className={className}>
      {typeof value === "string" ? value : displayValue}
    </span>
  );
};
