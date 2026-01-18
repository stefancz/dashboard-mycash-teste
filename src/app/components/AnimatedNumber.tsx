import { useCountNumber } from "../hooks/useCountNumber";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedNumber({
  value,
  duration = 1500,
  decimals = 2,
  prefix = "R$ ",
  suffix = "",
  className = "",
}: AnimatedNumberProps) {
  const { displayValue } = useCountNumber(value, {
    duration,
    decimals,
    prefix,
    suffix,
    separator: ".",
    decimalSeparator: ",",
  });

  return <span className={className}>{displayValue}</span>;
}
