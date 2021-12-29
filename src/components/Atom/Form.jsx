import React, { useState } from "react";



const Form = () => {

    const [subject, setSubject] = useState("");
    const [startTime, setStartTime] = useState("");
    const [finishTime, setFinishTime] = useState("");
    const [studyTime, setStudyTime] = useState("");

    const handleSubjectChange = (event) => {
        const inputValue = event.target.value
        setSubject(inputValue);
    }

    const handleStartTimeChange = (event) => {
        const inputValue = event.target.value
        setStartTime(inputValue);
    }

    const handleFinishTimeChange = (event) => {
        const inputValue = event.target.value
        setFinishTime(inputValue);
    }

    const handleStudyTimeChange = () => {
        const start = new Date(this.state.startTime)
        const finish = new Date(this.state.finishTime)
        const startHour = start.getHours()
        const finishHour = finish.getHours()
        const startMinute = start.getMinutes()
        const finishMinute = finish.getMinutes()
        const diffMinute = (finishHour - startHour) * 60 + (finishMinute - startMinute)
        const studyTime = diffMinute
        setStudyTime(studyTime);
    }
          
        return (
            <div className="form">
                <form>
                    <ul>
                        <li>
                    <label for="subject">科目：</label>
                    <input id="subject" type="text" name="subject" value={subject}
                                onChange={(event) => { handleSubjectChange(event) }} />
                        </li>
                        <li>
                            <label for="time">時間：</label>
                            <div>
                            <input type="datetime-local" id="time" value={startTime}
                                    onChange={(event) => { handleStartTimeChange(event) }} />
                                〜
                                <input type="datetime-local" value={finishTime}
                                    onChange={(event)=>{ handleFinishTimeChange(event)}} />                     
                            </div>
                        </li>
                        {studyTime}
                        <li>
                            <input type="submit" value="記録する"
                            onClick={()=>{ handleStudyTimeChange()}}/>
                        </li>
                    </ul>
                </form>
            </div>
        )
    }

export default Form;