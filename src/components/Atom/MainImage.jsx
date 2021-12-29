import React from "react";


const MainImage = (props) => {
    return (
            <div className="main-image">
                <img src={props.image}
                    alt="アバターの画像です。"
                />
            </div>
    )
}


export default MainImage;