import React, { useState } from 'react';
import fireIcon from '../svgs/fire-icon.svg';
import fireIconGray from '../svgs/fire-icon-gray.svg';
import iceIcon from '../svgs/ice-icon.svg';
import iceIconGray from '../svgs/ice-icon-gray.svg';

const FireAndIce = () => {

    const [minus, setMinus] = useState(0);
    const [plus, setPlus] = useState(0);
    const [fireHover, setFireHover] = useState(false);
    const [iceHover, setIceHover] = useState(false);

    const fireOnClick = () => { setPlus(plus + 1); setFireHover(!fireHover) }
    const iceOnClick = () => { setMinus(minus + 1); setIceHover(!iceHover) }

    return (
        <div className="fire-ice-container">
            <button className="fire" onClick={() => fireOnClick()}>
                <img
                    onMouseEnter={() => { setFireHover(!fireHover) }}
                    onMouseLeave={() => { setFireHover(!fireHover) }}
                    src={fireHover === false ? fireIconGray : fireIcon}
                    alt="Fire Icon"
                />
            </button>
            <div className="text-subtle-2">{plus}</div>
            <button className="ice" onClick={() => iceOnClick()} >
                <img
                    onMouseEnter={() => { setIceHover(!iceHover) }}
                    onMouseLeave={() => { setIceHover(!iceHover) }}
                    src={iceHover === false ? iceIconGray : iceIcon}
                    alt="Ice Icon" />
            </button>
            <div className="text-subtle-2">{minus}</div>
        </div>
    )
};

export default FireAndIce;