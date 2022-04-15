import React from "react";

const styles = {
    tg: {
        color: '#9CC1D9',
    },
    p: {
        fontWeight: 700,
    }
}

export default function Header() {
    const staticHeader = {
        name: "Semak Ruslan Aleksandrovich",
        gender: "Male",
        age: "20 years",
        tg: "@M***0",
        email: "rus************@gmail.com",
    };

    return (
        <div className="static-info-header">
            <img className="prof-photo" src="Photo.png" /> 
            <div className="header-wrap">
                <div className="myName">
                    {staticHeader.name}
                </div>
                <div>
                {staticHeader.gender}, {staticHeader.age}
                </div>
                <div className="communication">
                    <div style={styles.tg}>
                        Telegram: <sapn style={styles.p}>{staticHeader.tg}</sapn>
                    </div>
                    <div>
                        {staticHeader.email}
                    </div>
                </div>
            </div>
            
        </div>
    )
}