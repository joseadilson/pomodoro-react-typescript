import React from 'react';

import { PomodoroTimer } from './components';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={10}
        shortRestTime={3}
        longRestTime={6}
        cycles={4}
      />
    </div>
  );
}

export default App;
