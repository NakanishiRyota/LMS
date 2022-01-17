const Table = (props) => {
    
  return (
    <div className="table">
      <table border="1">
        <tbody>
          <tr>
            <th>今週の学習時間</th>
            <th>今月の学習時間</th>
            <th>合計学習時間</th>
          </tr>
          <tr>
            <td>{props.weekStudyTime}min</td>
            <td>{props.monthStudyTime}min</td>
            <td>{props.totalStudyTime}min</td>
          </tr>
          <tr></tr>
          <tr>
            <td colSpan="2">国語</td>
            <td>{props.japaneseStudyTime}min</td>
          </tr>
          <tr>
            <td colSpan="2">数学</td>
            <td>{props.mathStudyTime}min</td>
          </tr>
          <tr>
            <td colSpan="2">英語</td>
            <td>{props.englishStudyTime}min</td>
          </tr>
          <tr>
            <td colSpan="2">社会</td>
            <td>{props.socialstudyStudyTime}min</td>
          </tr>
          <tr>
            <td colSpan="2">理科</td>
            <td>{props.scienceStudyTime}min</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
