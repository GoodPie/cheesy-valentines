import {useRef, useState} from "react";

export const NoButton = () => {

    const [moveCount, setMoveCount] = useState(0);
    const button = useRef();

    const setNewPosition = () => {
        if (!button.current) return;

        // Choose the newX and newY positions randomly within the viewport with a 10px buffer
        const newX = Math.floor(Math.random() * (window.innerWidth - 100));
        const newY = Math.floor(Math.random() * (window.innerHeight - 100));

        button.current.style.left = `${newX}px`;
        button.current.style.top = `${newY}px`;
        button.current.style.position = "absolute"
        setMoveCount((prev) => prev + 1);
    }


    return (
        <>
            {moveCount < 150 &&
                <div className={"p-3"} ref={button} onPointerOver={setNewPosition} onMouseOver={setNewPosition}>
                    <button className={"bg-black text-white p-2 rounded-lg"}>
                        {moveCount === 0 && "No, sorry 😢"}
                        {moveCount >= 1 && moveCount < 5 && "Not Today Loser"}
                        {moveCount >= 5 && moveCount < 10 && "No was never an option 😈"}
                        {moveCount >= 10 && moveCount < 25 && "Please stop trying!"}
                        {moveCount >= 25 && moveCount < 50 && "🥱"}
                        {moveCount >= 50 && moveCount < 100 && "I was kinda hoping you'd stop now"}
                        {moveCount >= 100 && moveCount < 125 && "This is it..."}
                        {moveCount >= 125 && moveCount < 150 && "This button is about to die"}

                    </button>
                </div>
            }
        </>
    )
};