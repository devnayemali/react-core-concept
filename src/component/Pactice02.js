import React, { useState } from 'react'

export const Pactice02 = () => {
    return (
        <div className='border'>
            <h1>Pactice 01: Props, map, dynamic data</h1>
            <Counter />
        </div>
    )
}


const Counter = () => {

    const [count, setCount] = useState(0);

    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => setCount(count - 1);



    // const increaseCount = () => {
    //     const newCount = count + 1;
    //     setCount(newCount);
    // }

    return (
        <div>
            <div className='increas_num'>Count: {count}</div>
            <button onClick={increaseCount} className='increas_btn'>Increase</button>
            <button onClick={decreaseCount} className='increas_btn'>Decrease</button>
        </div>
    );

}
