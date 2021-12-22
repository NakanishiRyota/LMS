import React from "react";


class Table extends React.Component {
    render() {
        return (
            <div className="table">
                <table border="1">
                    <tr>
                        <th>今週の学習時間</th>
                        <th>今月の学習時間</th>
                        <th>合計学習時間</th>
                    </tr>
                    <tr>
                        <td>?h</td>
                        <td>?h</td>
                        <td>?h</td>
                    </tr>
                    <tr>

                    </tr>
                    <tr>
                        <td colspan="2">国語</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="2">数学</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="2">英語</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="2">社会</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="2">英語</td>
                        <td></td>
                    </tr>
                </table>
            </div>
        )
    }
}


export default Table;