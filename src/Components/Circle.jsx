import React from 'react';

const Circle = ({clickCoordinates}) => {
    const circleDiameter = 10;

    return (
        <div className='circle'
             style={{
                 width: circleDiameter,
                 height: circleDiameter,
                 left: clickCoordinates.x - circleDiameter / 2,
                 top: clickCoordinates.y - circleDiameter / 2,
             }}
        />
    );
};

export default Circle;