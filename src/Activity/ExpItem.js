import React from "react";

export default function ExpItem({item}) {

    return (
        <li className="exp-item">
            {item.name} ({item.city}, {item.link})
            <div>
                <p>{item.position}</p>
                <ul>
                    {item.stack.map((st, index) => (
                        <li key={index}>{st}</li>
                    ))}</ul>
            </div>
        </li>
    )
}