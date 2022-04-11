import React from "react";

const styles = {
    tg: {
        display: 'flex',
        flexDirection: 'row',
        color: '#9CC1D9',
    },
    p: {
        fontWeight: 700,
        margin: 0,
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
                        Telegram: <p style={styles.p}>{staticHeader.tg}</p>
                    </div>
                    <div>
                        {staticHeader.email}
                    </div>
                </div>
            </div>
            
        </div>
    )
}