import * as React from 'react';
import { formatCowntDownClock, formatDisplayTime } from '../../utils/formatTime';

const Index: React.FC = () => {
  const [initialTimer, setInitialTimer] = React.useState<number>(5);
  const [initialBreakTimer, setInitialBreakTimer] = React.useState<number>(5);
  const [timer, setTimer] = React.useState<number>(5);
  const [breakTimer, setBreakTimer] = React.useState<number>(5);
  const [isRunning, setIsRunning] = React.useState<boolean>(false);
  const [isBreakRunning, setIsBreakRunning] = React.useState<boolean>(false);
  const [mode, setMode] = React.useState<string>('initial');

  React.useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTimer(timer => timer - 1)
      }, 1000);
      return (() => clearInterval(id));
    } else {

    }
  }, [isRunning]);

  React.useEffect(() => {
    if (isBreakRunning) {
      setMode('break');
      const id = setInterval(() => {
        setBreakTimer(breakTimer => breakTimer - 1);
      }, 1000);
      return (() => clearInterval(id));
    } else {

    }
  }, [isBreakRunning]);

  const playSound = React.useCallback(() => {
    const audioElem = new Audio();
    audioElem.src = 'pomodoro-project/../../src/timerStopSound.mp3';
    audioElem.volume = 0.1;
    audioElem.play();
  }, [])

  if (timer === 0 && isRunning) {
    setIsRunning(false);
    playSound();
    setIsBreakRunning(true);
    return;
  };

  return (
    <> 
      <div className="hoge">
        <div>
          集中
          <select 
            defaultValue={timer / 60}
            onChange={(e) => {
              const time = parseInt(e.target.value) * 60;
              setTimer(time);
              setInitialTimer(time);
            }}>
            {[...Array(60)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {formatCowntDownClock(i + 1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          休憩
          <select 
            defaultValue={breakTimer / 60}
            onChange={(e) => {
              const time = parseInt(e.target.value) * 60;
              setBreakTimer(time),
              setInitialBreakTimer(time);
            }}>
            {[...Array(60)].reverse().map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {formatCowntDownClock(i + 1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          {mode === 'initial' ? '集中' : '休憩' }： 残り時間 {formatDisplayTime(timer)}
        </div>

        <div className="timer_button">
          <button
            onClick={() => {
              if (mode === 'focus') {
                setIsRunning(!isRunning);
              } else {
                setIsBreakRunning(!breakTimer);
              }
            }}
          >
            <i className="far fa-play-circle far-x3"></i>
          </button>

          <button
            onClick={() => {
              setBreakTimer(initialBreakTimer);
              setTimer(initialTimer);
            }}
          >
            <i className="far fa-stop-circle"></i>
          </button>

          <button
            onClick={() => {
              if (mode === 'focus') {
                setMode('break');
                setTimer(initialTimer);
                setIsRunning(true);
              } else if (mode === 'break') {
                setMode('timer');
                setBreakTimer(initialBreakTimer);
                setIsBreakRunning(true);
              }
            }}
          >
            <i className="fas fa-history"></i>
          </button>

        </div>
      </div>  
    </>
  )
}

export default Index;
