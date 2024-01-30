import {useEffect, useRef} from "react";

const AnimatedHeart = () => {

    const heartRef = useRef();

    useEffect(() => {

        if (!heartRef.current) return;

        // Set the start position somewhere random on the x axis, and at the bottom of the screen
        const startX = Math.floor(Math.random() * (window.innerWidth - 100));
        const startY = window.innerHeight - (Math.random() * -2000);
        const current = heartRef.current as HTMLElement;


        current.style.left = `${startX}px`;
        current.style.top = `${startY}px`;

        // Start the heart at a random angle
        const startAngle = Math.floor(Math.random() * 360);
        current.style.transform = `rotate(${startAngle}deg)`;


    }, []);

    return (
        <div ref={heartRef} className={"animated-heart text-5xl"}>
            ❤️
        </div>
    )

}

export default AnimatedHeart;