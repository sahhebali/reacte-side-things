import React from 'react';
import { addToDb, removeDb } from '../../Utilyties/FakeDb';


const LiveCosmetic = (props) => {
    // console.log(props.cosmetic)
    const { name, _id, phone } = props.cosmetic
    const handelPurches = (id) => {
        // set local storage
        console.log(id)
        addToDb(id)
    }
    const haldelDelete = (id) => {
        removeDb(id)
    }

    return (
        <div>
            <h2>{name}</h2>
            <p> id : <small>{_id}</small></p>
            <h3> phone : {phone}</h3>
            <button onClick={() => handelPurches(_id)}>Purches</button>

            <button onClick={() => haldelDelete(_id)}>Delete</button>


        </div>
    );
};

export default LiveCosmetic;