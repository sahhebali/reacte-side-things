import React, { useEffect, useState } from 'react';
import LiveCosmetic from '../LiveCosmetic/LiveCosmetic';

const Cosmetice = () => {
    const [cosmetics, setCosmetice] = useState([])
    useEffect(() => {
        fetch('./cosmetics.json')
            .then(res => res.json())
            .then(data => setCosmetice(data))
    }, [])
    return (
        <div>
            <h2 style={{ color: 'red' }}>Shop any cosmetice:::</h2>
            {
                cosmetics.map(cosmetic => <LiveCosmetic cosmetic={cosmetic}
                    key={cosmetic.age}>
                </LiveCosmetic>)
            }
        </div>
    );
};


export default Cosmetice;