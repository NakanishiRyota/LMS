import React from "react";


class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            week_time:"",
            month_time:"",
            total_time:""
        }
    }
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
                        <td>{this.state.week_time}h</td>
                        <td>{this.state_month_time}h</td>
                        <td>{this.state_total_time}h</td>
                    </tr>
                    <tr>

                    </tr>
                    <tr>
                        <td colspan="2">国語</td>
                        <td>h</td>
                    </tr>
                    <tr>
                        <td colspan="2">数学</td>
                        <td>h</td>
                    </tr>
                    <tr>
                        <td colspan="2">英語</td>
                        <td>h</td>
                    </tr>
                    <tr>
                        <td colspan="2">社会</td>
                        <td>h</td>
                    </tr>
                    <tr>
                        <td colspan="2">英語</td>
                        <td>h</td>
                    </tr>
                </table>
            </div>
        )
    }
}


export default Table;