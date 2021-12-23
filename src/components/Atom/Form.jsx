import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: "",
            date: "",
            howLong:"",
        }
    }
    handleSubjectChange(event) {
        const inputValue = event.target.value
        this.setState({ subject: inputValue })
    }
    render() {
        
        return (
            <div className="form">
                <form>
                    <ul>
                        <li>
                    <label for="subject">科目：</label>
                    <input id="subject" type="text" name="subject" value={this.state.subject}
                                onChange={(event) => { this.handleSubjectChange(event) }} />
                        </li>
                        <li>
                    <label for="date">日付：</label>
                            <input id="date" type="date" value={this.state.date} />
                        </li>
                        <li>
                    <label for="time">時間：</label>
                            <input id="time" type="time" value={this.state.howLong} />
                        </li>
                        <li>
                            <input type="submit" value="記録する" />
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}

export default Form;