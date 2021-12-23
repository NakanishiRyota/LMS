import React from "react";
import MainImage from "./Atom/MainImage"
import Table from "./Atom/Table"
import Form from "./Atom/Form"

class Main extends React.Component {
    render() {
        return (
            <div className = "main">
                <MainImage image="choju25_0035.png" />
                <Table />
                <Form/>
            </div>

        )
    }
}

export default Main;