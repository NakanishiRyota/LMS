import React, { useState } from "react";
import Table from "./Table";

const Form = () => {

    const [subject, setSubject] = useState("");
    const [japaneseStudyTime, setJapaneseStudyTime] = useState(0);
    const [mathStudyTime, setMathStudyTime] = useState(0);
    const [englishStudyTime, setEnglishStudyTime] = useState(0);
    const [socialstudyStudyTime, setSocialstudyStudyTime] = useState(0);
    const [scienceStudyTime, setScienceStudyTime] = useState(0);
    const [startTime, setStartTime] = useState("");
    const [finishTime, setFinishTime] = useState("");
    const [studyTime, setStudyTime] = useState("");



 
    const handleSubjectChange = (event) => {
        const inputValue = event.target.value
        setSubject(inputValue)
    }

    const handleStartTimeChange = (event) => {
        const inputValue = event.target.value
        setStartTime(inputValue);
    }

    const handleFinishTimeChange = (event) => {
        const inputValue = event.target.value
        setFinishTime(inputValue)
        const start = new Date(startTime)
        const finish = new Date(finishTime)
        const startHour = start.getHours()
        const finishHour = finish.getHours()
        const startMinute = start.getMinutes()
        const finishMinute = finish.getMinutes()
        const diffMinute = (finishHour - startHour) * 60 + (finishMinute - startMinute)
        const studyTime = diffMinute
        setStudyTime(studyTime);
        if (subject === "国語") {
            setJapaneseStudyTime(studyTime)
        } else if (subject === "数学") {
            setMathStudyTime(studyTime)
        } else if (subject === "英語") {
            setEnglishStudyTime(studyTime)
        } else if (subject === "社会") {
            setSocialstudyStudyTime(studyTime)
        } else if (subject === "理科") {
            setScienceStudyTime(studyTime)
        }

    }

    const handleStudyTimeChange = () => {

    }


          
    return (
        <>
            <Table studyTime={studyTime} />
            <div className="form">
                <form>
                    <ul>
                        <li>
                            <label for="subject">科目 : </label>
                            <select id="subject" name="subject" onChange={(event) => {
                                handleSubjectChange(event)
                            }}>
                                <option value="国語">国語</option>
                                <option value="数学">数学</option>
                                <option value="英語">英語</option>
                                <option value="社会">社会</option>
                                <option value="理科">理科</option>
                            </select>
                        </li>
                        <li>
                            <label for="time">時間 : </label>
                            <div>
                            <input type="datetime-local" id="time" value={startTime}
                                    onChange={(event) => { handleStartTimeChange(event) }} />
                                〜
                                <input type="datetime-local" value={finishTime}
                                    onChange={(event)=>{ handleFinishTimeChange(event)}} />                     
                            </div>
                        </li>
                        <li>
                            <input type="submit" value="記録する"
                            onSubmint={()=>{ handleStudyTimeChange()}}/>
                        </li>
                    </ul>
                </form>
            </div>
        </>
        )
    }

export default Form;