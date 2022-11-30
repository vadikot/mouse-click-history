import React, {useState} from 'react';
import Circle from "./Components/Circle";

const App = () => {
    const [clicks, setClicks] = useState([]);
    const [clicksHistory, setClicksHistory] = useState([]);

    function addNewCircle(event) {
        if (event.target.tagName === 'BUTTON') {
            return;
        }

        const mouseClick = {
            x: event.clientX,
            y: event.clientY,
        }

        setClicks(prevValues => [...prevValues, mouseClick]);
        setClicksHistory([...clicks, mouseClick]);
    }

    function undo() {
        setClicks(currentArr =>
            currentArr.filter((item, index, array) => index !== array.length - 1));
    }

    function redo() {
        setClicks(currentArr => [...currentArr, clicksHistory[currentArr.length]])
    }

    return (
        <div className='app' onClick={addNewCircle}>
            <div className='buttons__wrap'>
                <button className='btn'
                        onClick={undo}
                        disabled={clicks.length === 0}>undo
                </button>
                <button className='btn'
                        onClick={redo}
                        disabled={clicksHistory.length <= clicks.length}
                >redo
                </button>
            </div>
            <p className='text'>Click somewhere</p>
            {
                clicks.map((item, index) =>
                    <Circle key={index} clickCoordinates={item}/>)
            }
        </div>
    );
};

export default App;