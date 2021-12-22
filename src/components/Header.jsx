import React from "react";
import HeaderImage from "./Atom/HeaderImage";

class Header extends React.Component {
    render() {
        return (
            <>
            <div className="header-image">
                    <HeaderImage
                        image="pen_enpitsu_mark.png"
                    />
            </div>
            <div className="header-title">
                <h1>学習管理アプリ</h1>
            </div>
            </>
        )
    }
}

export default Header