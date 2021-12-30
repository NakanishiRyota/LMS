import HeaderImage from "./Atom/HeaderImage";

const Header = () => {
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


export default Header