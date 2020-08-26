import React from "react";

export default function UserItem(props) {
    const {active, username } = props;
    const online_icon = <span className="online_icon"></span>;
    return (
        <li className={active ? "active" : ""}>
            <div className="d-flex bd-highlight">
                <div className="img_cont">
                    <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                         className="rounded-circle user_img" />
                    { active && online_icon}
                </div>
                <div className="user_info">
                    <span>{username}</span>
                    <p>{username} is online</p>
                </div>
            </div>
        </li>
    )
}