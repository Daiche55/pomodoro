import * as React from 'react';
import { formatCowntDownClock } from '../lib/utils/formatTime';
import useInterval from 'use-interval';

const Index: React.FC = () => {
  const [timerMinute, setTimerMinute] = React.useState<number>(25);
  const [timerSecond, setTimerSecond] = React.useState<number>(0);
  const [breakTimer, setBreakTimer] = React.useState<number>(5);
  const [isRunning, setIsRunning] = React.useState<boolean>(false);
  const [intervalId, setIntervalId] = React.useState(null);


  React.useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTimerSecond(timerSecond => timerSecond - 1);
      }, 1000)
      setIntervalId(id)
    } else {
      clearInterval(intervalId);
    }
  }, [isRunning]);

  return (
    <React.Fragment>      
      <div>
        集中
        <select 
          defaultValue={timerMinute} 
          onChange={(e) => setTimerMinute(parseInt(e.target.value))}>
          {[...Array(60)].reverse().map((_, i) => (
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

      {timerMinute}:{timerSecond}

      <button
        onClick={() => setIsRunning(!isRunning)}
      >
        <i className="far fa-clock fa-3x"></i>
      </button>
    </React.Fragment>
  )
}

export default Index;
