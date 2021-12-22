import React from "react";
import MainImage from "./Atom/MainImage"
import Table from "./Atom/Table"

class Main extends React.Component {
    render() {
        return (
            <>
                <div>
                    <MainImage image="choju25_0035.png" />
                </div>
                <div>
                    <Table />
                </div>
            </>
        )
    }
}

export default Main;