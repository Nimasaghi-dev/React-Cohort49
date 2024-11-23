import React from 'react';
import useWindowSize from '../hooks/useWindowSize';

const DisplaySize = () => {
    const { width, height } = useWindowSize();

    return (
        <div>
        <p>Width: {width}px</p>
        <p>Height: {height}px</p>
        </div>
    );
};

export default DisplaySize;
