import React, { useEffect, useRef, useState } from "react";

const ScrollReveal = ({
    children,
    className = "",
    delay = 0,
    direction = "up",
    once = true,
}) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    if (once) {
                        observer.unobserve(element);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -60px 0px",
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [once]);

    const directions = {
        up: "translate-y-8",
        down: "-translate-y-8",
        left: "translate-x-8",
        right: "-translate-x-8",
        none: "translate-x-0 translate-y-0",
    };

    return (
        <div
            ref={elementRef}
            style={{
                transitionDelay: `${delay}ms`,
            }}
            className={`
        transition-all
        duration-700
        ease-out
        will-change-transform

        ${isVisible
                    ? "opacity-100 translate-x-0 translate-y-0 blur-0"
                    : `opacity-0 blur-[6px] ${directions[direction]}`
                }

        ${className}
      `}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;