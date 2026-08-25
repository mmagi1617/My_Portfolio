import React, { useEffect, useState } from "react";

const TYpingText = () => {
    const words = ["Java", "Spring Boot", "PHP", "React.JS"];

    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[wordIndex];

        // Pause after the word is completely typed
        if (!deleting && text === word) {
            const pauseTimer = setTimeout(() => {
                setDeleting(true);
            }, 1500);

            return () => clearTimeout(pauseTimer);
        }

        const timer = setTimeout(() => {
            if (!deleting) {
                // Typing
                setText(word.substring(0, text.length + 1));
            } else {
                // Deleting
                setText(word.substring(0, text.length - 1));

                if (text.length === 0) {
                    setDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, deleting ? 90 : 120);

        return () => clearTimeout(timer);
    }, [text, deleting, wordIndex]);

    return (
        <span>
            <span className="text-primary text-xl sm:text-xl md:text-2 xl">
                {text}
                <span className="animate-pulse">|</span>
            </span>
        </span>
    );
};

export default TYpingText;