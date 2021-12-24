import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: "",
            date: "",
            startTime: "",
            finishTime: "",
            studyTime: "",
        }
    }
    handleSubjectChange(event) {
        const inputValue = event.target.value
        this.setState({ subject: inputValue })
    }
    handleDateChange(event) {
        const inputValue = event.target.value
        this.setState({date: inputValue})
    }
    handleStartTimeChange(event) {
        const inputValue = event.target.value
        this.setState({startTime: inputValue
        })
    }

    handleFinishTimeChange(event) {
        const inputValue = event.target.value
        this.setState({ finishTime: inputValue })
        const start = new Date(this.state.startTime)
        const finish = new Date(this.state.finishTime)
        const startHour = start.getHours()
        const finishHour = finish.getHours()
        const startMinute = start.getMinutes()
        const finishMinute = finish.getMinutes()
        const diffMinute = (finishHour - startHour) * 60 + (finishMinute - startMinute)
        const studyTime = diffMinute
        this.setState({ studyTime: studyTime })
    }


    handleStudyTimeChange() {

        
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
                            <label for="time">時間：</label>
                            <div>
                            <input type="datetime-local" id="time" value={this.state.startTime}
                                    onChange={(event) => { this.handleStartTimeChange(event) }} />
                                〜
                                <input type="datetime-local" value={this.state.finishTime}
                                    onChange={(event)=>{this.handleFinishTimeChange(event)}} />                     
                            </div>
                        </li>
                        <li>
                            <input type="submit" value="記録する"
                            onClick={()=>{this.handleStudyTimeChange()}}/>
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}

export default Form;