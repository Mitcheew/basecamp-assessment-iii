import React from 'react';

const item = (props) => {
    return <li>
    <button onClick={props.delEvent}>delete</button>
        <span> {props.children}</span>
    </li>
}
export default item;