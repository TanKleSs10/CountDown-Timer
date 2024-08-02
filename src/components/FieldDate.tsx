import { useEffect, useState, ReactNode } from "react";
import "./clock.css";

type FieldDateProps = {
  children: ReactNode;
  label: "days" | "hours" | "minutes" | "seconds";
};

export default function FieldDate({ children, label }: FieldDateProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 800); // Duración de la animación

    return () => clearTimeout(timer);
  }, [children]);

  return (
    <div className="space-y-6 text-center">
      <div className="time-segment">
        <div className="segment-display">
          <div className="segment-display__top">{children}</div>
          <div className="segment-display__bottom">{children}</div>
          <div className={`segment-overlay ${animate ? "flip" : ""}`}>
            <div className="segment-overlay__top">{children}</div>
            <div className="segment-overlay__bottom">{children}</div>
          </div>
        </div>
      </div>
      <p className="text-GrayishBlue text-[0.7em] font-bold uppercase tracking-VeryWidest">
        {label}
      </p>
    </div>
  );
}
