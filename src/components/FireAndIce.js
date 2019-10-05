import React, { useState } from 'react';
import fireIcon from '../svgs/fire-icon.svg';
import fireIconGray from '../svgs/fire-icon-gray.svg';
import iceIcon from '../svgs/ice-icon.svg';
import iceIconGray from '../svgs/ice-icon-gray.svg';

const FireAndIce = () => {

    const [iceTotal, setIceTotal] = useState(0);
    const [fireTotal, setFireTotal] = useState(0);
    const [fire, setFire] = useState(false);
    const [ice, setIce] = useState(false);

    const fireOnClick = () => {
        if (ice === true) {
            setIce(false);
            setIceTotal(iceTotal - 1)
        }
        if (!fire) {
            setFireTotal(fireTotal + 1);
            setFire(true);
        } else {
            setFireTotal(fireTotal - 1);
            setFire(false);
        }
    }
    const iceOnClick = () => {
        if (fire === true) {
            setFire(false);
            setFireTotal(fireTotal - 1)
        }
        if (!ice) {
            setIceTotal(iceTotal + 1);
            setIce(true);
        } else {
            setIceTotal(iceTotal - 1);
            setIce(false);
        }
    }

    return (
        <div className="fire-ice-container">
            <button className="fire" onClick={() => fireOnClick()}>
                <img src={fire === false ? fireIconGray : fireIcon} alt="Fire Icon" />
            </button>
            <div className="text-subtle-2">{fireTotal}</div>
            <button className="ice" onClick={() => iceOnClick()} >
                <img src={ice === false ? iceIconGray : iceIcon} alt="Ice Icon" />
            </button>
            <div className="text-subtle-2">{iceTotal}</div>
        </div>
    )
};

export default FireAndIce;