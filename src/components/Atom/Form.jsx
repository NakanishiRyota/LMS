import React, { useState } from "react";
import { calcTotalStudyTime } from "../../util/Controller";
import { getFormattedNowTime } from "../../util/DateUtil";
import Table from "./Table";

const nowTime = getFormattedNowTime();
const defaultStudyLog = {
  id: 0,
  subject: "国語",
  startTime: nowTime,
  finishTime: nowTime,
};

const Form = () => {
  const [studyLogs, setStudyLogs] = useState([]);
  const [newStudyLog, setNewStudyLog] = useState(defaultStudyLog);

  const addStudyLogs = (newStudyLog) => {
    setStudyLogs((studyLogs) => {
      const returnValue = [...studyLogs];
      returnValue.push(newStudyLog);
      return returnValue;
    });
  };

  const updateNewStudyLog = (newProp) =>
    setNewStudyLog((prev) => ({
      ...prev,
      ...newProp,
    }));

  // TODO: これら③つの処理は似たようなことをしているので、一つにまとめられないかなぁ
  const handleSubjectChange = (event) => {
    const subject = event.target.value;
    updateNewStudyLog({ subject });
  };

  const handleStartTimeChange = (event) => {
    const startTime = event.target.value;
    updateNewStudyLog({ startTime });
  };

  const handleFinishTimeChange = (event) => {
    const finishTime = event.target.value;
    updateNewStudyLog({ finishTime });
  };

  const handleLogAdd = (event) => {
    console.log("handleLogAdd is run");
    addStudyLogs(newStudyLog);
  };

  const someFuncition = () => {};
  const totalStudyTime = calcTotalStudyTime(studyLogs);
  const japaneseStudyTime = someFuncition(studyLogs);
  const mathStudyTime = someFuncition(studyLogs);
  const socialstudyStudyTime = someFuncition(studyLogs);
  const scienceStudyTime = someFuncition(studyLogs);
  const englishStudyTime = someFuncition(studyLogs);
  const weekStudyTime = someFuncition(studyLogs);
  const monthStudyTime = someFuncition(studyLogs);

  return (
    <>
      <Table
        totalStudyTime={totalStudyTime}
        japaneseStudyTime={japaneseStudyTime}
        mathStudyTime={mathStudyTime}
        englishStudyTime={englishStudyTime}
        socialstudyStudyTime={socialstudyStudyTime}
        scienceStudyTime={scienceStudyTime}
        weekStudyTime={weekStudyTime}
        monthStudyTime={monthStudyTime}
      />
      <div className="form">
        <form>
          <ul>
            <li>
              <label htmlFor="subject">科目 : </label>
              <select
                id="subject"
                name="subject"
                onChange={(event) => {
                  handleSubjectChange(event);
                }}
              >
                <option value="国語">国語</option>
                <option value="数学">数学</option>
                <option value="英語">英語</option>
                <option value="社会">社会</option>
                <option value="理科">理科</option>
              </select>
            </li>
            <li>
              <label htmlFor="time">時間 : </label>
              <div>
                <input
                  type="datetime-local"
                  id="time"
                  value={newStudyLog.startTime}
                  onChange={(event) => {
                    handleStartTimeChange(event);
                  }}
                />
                〜
                <input
                  type="datetime-local"
                  value={newStudyLog.finishTime}
                  onChange={(event) => {
                    handleFinishTimeChange(event);
                  }}
                />
              </div>
            </li>
            <li>
              <input
                type="button"
                value="記録する"
                onClick={() => {
                  handleLogAdd();
                }}
              />
            </li>
          </ul>
        </form>
      </div>
    </>
  );
};

export default Form;
