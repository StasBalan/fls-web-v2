import SlotCounter from "react-slot-counter";

export function AnimatedNumber({ value }: { value: number | string }) {
  return (
    <SlotCounter value={value} sequentialAnimationMode useMonospaceWidth />
  );
}
