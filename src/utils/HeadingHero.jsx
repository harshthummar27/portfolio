import React, { useEffect, useState } from "react";

export const HeadingHero = () => {
    const roles = [
        { title: "Frontend Developer" },
        { title: "ReactJs Developer" },
        { title: "JavaScript Developer" },
        { title: "MERN Stack Developer" },
    ];

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [currText, setCurrText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const current = roles[currentRoleIndex].title;

            if (!isDeleting) {
                // Typing
                if (currText === current) {
                    setTimeout(() => setIsDeleting(true), 2000); // wait before deleting
                    setTypingSpeed(500);
                } else {
                    setCurrText(current.substring(0, currText.length + 1));
                    setTypingSpeed(150);
                }
            } else {
                // Deleting
                if (currText === "") {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                    setTypingSpeed(500);
                } else {
                    setCurrText(current.substring(0, currText.length - 1));
                    setTypingSpeed(50);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currText, isDeleting, currentRoleIndex, roles, typingSpeed]);

    return (
        <div className="text-center md:text-start">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                <span className="text-outline pb-1">{currText}</span>
                <span className="inline-block h-7 md:h-14 w-0.5 bg-cyan-400 ml-1"></span>
            </h1>
        </div>
    );
};
