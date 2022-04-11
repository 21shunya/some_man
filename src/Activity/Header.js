import React from "react";

export default function Header() {
    return(
        <div className="activity-header-wrapper">
            <div className="nav-caption">
                <div className="activity-nav">
                    <span className="nav-choosen" >Опыт работы</span>
                    <span className="nav-secondary">Образование</span>
                    <span className="nav-secondary">Обо мне</span>
                </div>
                <span>1 год и 5 месяцев</span>
            </div>
            <div>
                <img className="link" src="hh.svg" />
                <img className="link" src="linkedin.svg" />
                <img className="link" src="telegram.svg" />
            </div>
        </div>
    )
}