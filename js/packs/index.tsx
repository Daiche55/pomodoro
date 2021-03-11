import * as React from 'react';
import { formatCowntDownClock, formatDisplayTime } from '../lib/utils/formatTime';

const Index: React.FC = () => {
  const [timer, setTimer] = React.useState<number>(60 * 25);
  const [breakTimer, setBreakTimer] = React.useState<number>(5);
  const [isRunning, setIsRunning] = React.useState<boolean>(false);
  console.log("hoaw")

  React.useEffect(() => {
    if (isRunning) {
      console.log("hoge")
      const id = setInterval(() => {
        console.log(timer);
        setTimer(timer => timer - 1)
      }, 1000);
      return (() => clearInterval(id));
    } else {

    }
  }, [isRunning]);

  return (
    <React.Fragment>   
      <div>
        集中a
        <select 
          defaultValue={timer / 60}
          onChange={(e) => setTimer(parseInt(e.target.value) * 60)}>
          {[...Array(60)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {formatCowntDownClock(i + 1)}
            </option>
          ))}
        </select>
      </div>

      <div className="">
        休憩
        <select 
          defaultValue={breakTimer}
          onChange={(e) => setBreakTimer(parseInt(e.target.value))}
        >
          {[...Array(60)].reverse().map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {formatCowntDownClock(i + 1)}
            </option>
          ))}
        </select>
      </div>

      残り時間 {formatDisplayTime(timer)}

      <button
        onClick={() => setIsRunning(!isRunning)}
      >
        <i className="far fa-clock fa-3x"></i>
      </button>
    </React.Fragment>
  )
}

export default Index;
