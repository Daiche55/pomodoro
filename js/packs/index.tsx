import * as React from 'react';
import { formatTime, formatCowntDownClock } from '../lib/utils/formatTime';



const Index: React.FC = () => {
  const [timer, setTimer] = React.useState<number>(25);
  const [breakTimer, setBreakTimer] = React.useState<number>(5);

  return (
    <React.Fragment>      
      <div className="">
        集中
        <select 
          defaultValue={timer} 
          onChange={(e) => setTimer(parseInt(e.target.value))}>
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

      <button>
      <i className="fas fa-dog fa-3x"></i>
      </button>
    </React.Fragment>
  )
}

export default Index;
