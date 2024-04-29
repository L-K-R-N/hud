import { Chat } from './components/Chat/Chat';
import { Notice } from './components/Notice/Notice';
import './styles/main.scss';
import cl from './App.module.scss';
import { Info } from './components/Info/Info';
import { KillList } from './components/KillList/KillList';
import { Quest } from './components/Quest/Quest';
import { title } from 'process';
import { Prize } from './components/Prize/Prize';

const App = () => {
   return (
      <div className={cl.hud}>
         <Chat />

         <Notice
            text={
               'Lorem ipsum dolor sit amet consectetur. Sed urna id arcu vestibulum nunc.'
            }
            type="info"
            timeMs={5000}
         />
         <Notice
            text={
               'Lorem ipsum dolor sit amet consectetur. Sed urna id arcu vestibulum nunc.'
            }
            type="success"
            timeMs={5000}
         />
         <Notice
            text={
               'Lorem ipsum dolor sit amet consectetur. Sed urna id arcu vestibulum nunc.'
            }
            type="error"
            timeMs={5000}
         />

         <Info />
         <KillList />

         <Quest
            quest={{
               name: 'Крутой квест',
               text: 'Lorem ipsum dolor sit amet consectetur. Et quisque et nullam nec.',
               exp: 20,
               price: 2000,
               time: 0,
            }}
         />
         <Prize />
      </div>
   );
};

export default App;
