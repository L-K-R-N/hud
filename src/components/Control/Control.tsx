import cl from './Control.module.scss';
import { FC } from 'react';
import skullIcon from './assets/skull.svg';

interface ITeam {
   name: string;
   kills: number;
}

interface Props {
   attackTeam: ITeam;
   defenceTeam: ITeam;
   time: string;
}

export const Control: FC<Props> = ({ attackTeam, defenceTeam, time }) => {
   return (
      <div className={cl.control}>
         <div className={cl.team}>
            <p className={cl.teamKillCounter}>
               <img src={skullIcon} alt="" />
               <span>{attackTeam.kills}</span>
               <span className={cl.bgName}>{attackTeam.name}</span>
            </p>
            <h4 className={cl.teamName}>
               {attackTeam.name} <span className={cl.attack}>Атака</span>
            </h4>
         </div>
         <span className={cl.time}>{time}</span>
         <div className={cl.team}>
            <p className={cl.teamKillCounter}>
               <img src={skullIcon} alt="" />
               <span>{defenceTeam.kills}</span>
               <span className={cl.bgName}>{defenceTeam.name}</span>
            </p>
            <h4 className={cl.teamName}>
               {defenceTeam.name} <span className={cl.defence}>Защита</span>
            </h4>
         </div>
      </div>
   );
};
