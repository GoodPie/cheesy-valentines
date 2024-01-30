import {useEffect, useRef} from "react";

const AnimatedHeart = () => {

    const heartRef = useRef();

    useEffect(() => {
        // Set the start position somewhere random on the x axis, and at the bottom of the screen
        const startX = Math.floor(Math.random() * (window.innerWidth - 100));
        const startY = window.innerHeight - (Math.random() * -2000);

        heartRef.current.style.left = `${startX}px`;
        heartRef.current.style.top = `${startY}px`;

        // Start the heart at a random angle
        const startAngle = Math.floor(Math.random() * 360);
        heartRef.current.style.transform = `rotate(${startAngle}deg)`;

    }, []);

    return (
        <div  ref={heartRef} className={"animated-heart text-5xl"}>
            ❤️
        </div>
    )

}

export default AnimatedHeart;