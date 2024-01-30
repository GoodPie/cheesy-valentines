const YesButton = (props: {onClick: () => void}) => {
    return <button onClick={props.onClick} className={"mt-3 bg-black text-white p-2 rounded-lg"}>Yes, of course ❤️ </button>;
}

export default YesButton;