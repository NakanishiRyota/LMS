import { convertUnixTime, millSecToMin } from "./DateUtil";

const getStartTime = (studyLogs) => {
  const startTimeString = studyLogs.startTime;
  const startTime = convertUnixTime(startTimeString);
  return startTime;
};

const getFinishTime = (studyLogs) => {
  const finishTimeString = studyLogs.finishTime;
  const finishTime = convertUnixTime(finishTimeString);
  return finishTime;
};

const getStudyTime = (studyLog) => {
  const startTime = getStartTime(studyLog);
  const finishTime = getFinishTime(studyLog);
  return { startTime, finishTime };
};

// input: StydyLog, Output: TotalStudyTime
export const calcTotalStudyTime = (studyLogs) => {
  let startTimeSum = 0;
  let finishTimeSum = 0;
  studyLogs.forEach((studyLog) => {
    const { startTime, finishTime } = getStudyTime(studyLog);
    startTimeSum += startTime;
    finishTimeSum += finishTime;
  });
  return millSecToMin(finishTimeSum - startTimeSum);
};

const judeThisWeek = (stringTime) => {
  return true; // false
};

export const calcWeekStudyTime = (studyLogs) => {
  let startTimeSum = 0;
  let finishTimeSum = 0;
  studyLogs.forEach((studyLog) => {
    if (judeThisWeek(studyLog.startTime)) {
      const { startTime, finishTime } = getStudyTime(studyLog);
      startTimeSum += startTime;
      finishTimeSum += finishTime;
    }
  });
  return millSecToMin(finishTimeSum - startTimeSum);
};
