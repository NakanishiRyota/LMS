import React, { useState , useEffect} from "react";
import Table from "./Table";

const Form = () => {

    const [subject, setSubject] = useState("国語");
    const [japaneseStudyTime, setJapaneseStudyTime] = useState(0);
    const [mathStudyTime, setMathStudyTime] = useState(0);
    const [englishStudyTime, setEnglishStudyTime] = useState(0);
    const [socialstudyStudyTime, setSocialstudyStudyTime] = useState(0);
    const [scienceStudyTime, setScienceStudyTime] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [finishTime, setFinishTime] = useState(0);
    const [studyTime, setStudyTime] = useState(0);
    const [weekStudyTime, setWeekStudyTime] = useState(0);
    const [monthStudyTime, setMonthStudyTime] = useState(0);
    const [totalStudyTime, setTotalStudyTime] = useState(0);



 
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
 

    }
    
    useEffect(() => {
        if (subject === "国語") {
            setJapaneseStudyTime(prevState => prevState + studyTime)
        } else if (subject === "数学") {
            setMathStudyTime(prevState => prevState + studyTime)
        } else if (subject === "英語") {
            setEnglishStudyTime(prevState => prevState + studyTime)
        } else if (subject === "社会") {
            setSocialstudyStudyTime(prevState => prevState + studyTime)
        } else if (subject === "理科") {
            setScienceStudyTime(prevState => prevState + studyTime)
        }
    }, [studyTime])

    useEffect(() => {
        setWeekStudyTime(prevState => prevState + studyTime);
    }, [studyTime]);
    
    useEffect(() => {
        setMonthStudyTime(prevState => prevState + studyTime);
    }, [studyTime]);

    useEffect(() => {
        setTotalStudyTime(prevState => prevState + studyTime);
    }, [studyTime]);

    const handleStudyTimeChange = () => {
        const start = new Date(startTime)
        const finish = new Date(finishTime)
        const startHour = start.getHours()
        const finishHour = finish.getHours()
        const startMinute = start.getMinutes()
        const finishMinute = finish.getMinutes()
        const diffMinute = (finishHour - startHour) * 60 + (finishMinute - startMinute)
        const studyTime = diffMinute
        setStudyTime(studyTime);

    }


          
    return (
        <>
            <Table totalStudyTime={totalStudyTime}
                japaneseStudyTime={japaneseStudyTime}
                mathStudyTime={mathStudyTime}
                englishStudyTime={englishStudyTime}
                socialstudyStudyTime={socialstudyStudyTime}
                scienceStudyTime={scienceStudyTime}
                weekStudyTime={weekStudyTime}
                monthStudyTime={monthStudyTime}/>
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
                            <input type="button" value="記録する"
                            onClick={()=>{ handleStudyTimeChange()}}/>
                        </li>
                    </ul>
                </form>
            </div>
        </>
        )
    }

export default Form;