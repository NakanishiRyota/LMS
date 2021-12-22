import React from "react";

class Image extends React.Component {
    render() {
        return (
            <div className="main-image">
                <img className="image" src={this.props.image}
                alt="アバターの画像です。"/>
            </div>
        )
    }
}

export default Image;