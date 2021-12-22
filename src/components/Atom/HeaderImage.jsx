import React from "react";

class HeaderImage extends React.Component {
    render() {
        return (
            <>
                <img src={this.props.image}
                    width="auto"
                    height="40"
                />
            </>
        )
    }
}

export default HeaderImage;