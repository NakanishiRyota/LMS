import React from "react";
import MainImage from "./Atom/MainImage"
import Table from "./Atom/Table"
import Form from "./Atom/Form"

const Main = () => {
    return (
        <div className="main">
            <MainImage image="kaeru.png" />
            <Table />
            <Form />
        </div>

    )
}


export default Main;