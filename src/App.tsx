import { Chat } from './components/Chat/Chat';
import { INotice, Notice } from './components/Notice/Notice';
import './styles/main.scss';
import cl from './App.module.scss';
import { Info } from './components/Info/Info';
import { KillList } from './components/KillList/KillList';
import { Quest } from './components/Quest/Quest';
import { title } from 'process';
import { Prize } from './components/Prize/Prize';
import { Control } from './components/Control/Control';
import { Stats } from './components/Stats/Stats';
import { Speedometer } from './components/Speedometer/Speedometer';
import { useState } from 'react';

const App = () => {
   const [notifications, setNotifications] = useState<INotice[]>([
      {
         text: 'Lorem ipsum dolor sit amet consectetur. Sed urna id arcu vestibulum nunc.',
         type: 'info',
         timeMs: 5000,
      },
      {
         text: 'Lorem ipsum dolor sit amet consectetur. Sed urna id arcu vestibulum nunc.',
         type: 'success',
         timeMs: 5000,
      },
      {
         text: 'Lorem ipsum dolor sit amet consectetur. Sed urna id arcu vestibulum nunc.',
         type: 'error',
         timeMs: 5000,
      },
   ]);
   return (
      <div className={cl.hud}>
         <div className={cl.chat}>
            <Chat />
         </div>

         <div className={cl.noticeList}>
            {notifications.map((notice) => (
               <Notice
                  text={notice.text}
                  timeMs={notice.timeMs}
                  type={notice.type}
               />
            ))}
         </div>
         <div className={cl.map}></div>
         <div className={cl.info}>
            <Info />
         </div>
         <div className={cl.killList}>
            <KillList />
         </div>

         <div className={cl.quest}>
            <Quest
               quest={{
                  name: 'Крутой квест',
                  text: 'Lorem ipsum dolor sit amet consectetur. Et quisque et nullam nec.',
                  exp: 20,
                  price: 2000,
                  time: 0,
               }}
            />
         </div>
         <div className={cl.prize}>
            <Prize />
         </div>
         <div className={cl.control}>
            <Control
               attackTeam={{
                  name: 'The ballas gang',
                  kills: 2,
               }}
               defenceTeam={{
                  name: 'The families',
                  kills: 2,
               }}
               time="05:00"
            />
         </div>

         <div className={cl.stats}>
            <Stats
               serverStats={{
                  time: '00:00',
                  date: '27.11.23',
                  mode: 'admin',
                  multiplier: 2,
                  players: 999,
               }}
               personalStats={{
                  balance: 500000000,
                  gun: {
                     name: 'Carabine',
                     bullets: 30,
                  },
                  lvl: 2,
               }}
            />
         </div>
         <div className={cl.speedometer}>
            <Speedometer
               speed={{ max: 200, current: 90 }}
               nitro={{ max: 100, current: 50 }}
               fuel={{ max: 300, current: 150 }}
            />
         </div>
      </div>
   );
};

export default App;
