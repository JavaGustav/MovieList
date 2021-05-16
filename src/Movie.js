import React from 'react';

function getStars(grade) {

    let imgArray = [];
    for(var i = 0; i < grade; i++) {
        imgArray.push(<img src='star.png' alt='Star'></img>);
    }
    return imgArray;
}

export default function Movie(props) {

    return(
        <div>
            <li className="list-group-item" data-grade={props.item.grade} data-title={props.item.name}>
                {props.item.name}
                {getStars(props.item.grade)}
                <button className="btn btn-sm btn-danger float-end" onClick={() => props.deleteItem(props.item.id)}>X</button>
            </li>
        </div>
    )
}