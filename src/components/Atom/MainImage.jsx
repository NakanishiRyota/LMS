import React from "react";

class MainImage extends React.Component {
    render() {
        return (
            <div className="main-image">
                <img src={this.props.image}
                    alt="アバターの画像です。"
                />
            </div>
        )
    }
}

export default MainImage;