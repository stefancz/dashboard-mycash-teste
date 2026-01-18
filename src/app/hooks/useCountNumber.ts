import { useState, useEffect, useRef } from "react";

interface UseCountNumberOptions {
  duration?: number;
  startOnMount?: boolean;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  decimalSeparator?: string;
}

export function useCountNumber(
  targetValue: number,
  options: UseCountNumberOptions = {}
) {
  const {
    duration = 1500,
    startOnMount = true,
    decimals = 2,
    prefix = "",
    suffix = "",
    separator = ".",
    decimalSeparator = ",",
  } = options;

  const [displayValue, setDisplayValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const startValueRef = useRef(0);

  const formatNumber = (value: number): string => {
    const parts = value.toFixed(decimals).split(".");
    const integerPart = parts[0];
    const decimalPart = parts[1] || "";

    // Add thousands separator
    const formattedInteger = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      separator
    );

    const formattedDecimal = decimalPart
      ? `${decimalSeparator}${decimalPart}`
      : "";

    return `${prefix}${formattedInteger}${formattedDecimal}${suffix}`;
  };

  const animate = (currentTime: number) => {
    if (startTimeRef.current === null) {
      startTimeRef.current = currentTime;
    }

    const elapsed = currentTime - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3);

    const currentValue =
      startValueRef.current +
      (targetValue - startValueRef.current) * easeOut;

    setDisplayValue(currentValue);

    if (progress < 1) {
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      setDisplayValue(targetValue);
      setIsAnimating(false);
      startTimeRef.current = null;
    }
  };

  const start = (fromValue?: number) => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    startValueRef.current = fromValue ?? displayValue;
    setIsAnimating(true);
    startTimeRef.current = null;
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (startOnMount) {
      start(0);
    }

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [targetValue]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    displayValue: formatNumber(displayValue),
    rawValue: displayValue,
    isAnimating,
    start,
  };
}
