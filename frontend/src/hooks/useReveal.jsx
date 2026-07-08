import { useEffect, useRef, useState } from "react";

export function useReveal(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: options.threshold ?? 0.15, rootMargin: options.rootMargin ?? "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView, options.threshold, options.rootMargin]);

  return [ref, inView];
}

export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const [ref, inView] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
