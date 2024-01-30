import './App.css'
import cat from "./assets/cat-flowers.png"
import cat_glasses from "./assets/cat-sunglasses.png"
import {NoButton} from "./NoButton.tsx";
import YesButton from "./YesButton.tsx";
import {useState} from "react";
import AnimatedHeart from "./AnimatedHeart.tsx";

function App() {

    const [hasSaidYes, setHasSaidYes] = useState(false);


  return (
    <div className={"bg-pink-300 overflow-hidden overflow-y-hidden min-h-screen win-w-screen p-0 flex flex-col  items-center"}>
        {!hasSaidYes &&
            <>
            <img src={cat} alt={"Cat holding flowers"} className={"w-80"}/>
            <div>
            Will you be my valentine?
            </div>
                <YesButton onClick={() => setHasSaidYes(true)}/>
                <NoButton/>
            </>
        }

        {hasSaidYes &&
            <>
                <img src={cat_glasses} alt={"Cat wearing glasses"} className={"w-80"}/>
                <div>
                    See you on feb 14th 😘
                </div>
                {[...Array(500)].map((_, index) => (
                    <AnimatedHeart key={"Heart-" + index} />
                ))}
            </>
        }


    </div>

  )
}

export default App
