"use client";

import { useState, useEffect, useRef } from "react";

export function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export default function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity .65s ${delay}s cubic-bezier(.22,1,.36,1), transform .65s ${delay}s cubic-bezier(.22,1,.36,1)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
