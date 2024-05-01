import cl from './Stats.module.scss';
import { FC } from 'react';
import starIcon from './assets/star.svg';
import logoIcon from './assets/logo.svg';
import timeIcon from './assets/time.svg';
import usersIcon from './assets/users.svg';
import voiceIcon from './assets/voice.svg';
import dollarIcon from './assets/dollar.svg';
import gunPng from './assets/gun.png';

interface Props {
   serverStats: IServerStats;
   personalStats: IPersonalStats;
}

interface IServerStats {
   mode: 'admin' | 'user';
   multiplier: number;
   players: number;
   time: string;
   date: string;
}

interface IPersonalStats {
   gun: {
      name: string;
      bullets: number;
   };
   lvl: number;
   balance: number;
}

export const Stats: FC<Props> = ({
   serverStats: { mode, multiplier, players, time, date },
   personalStats: { balance, gun, lvl },
}) => {
   return (
      <div className={cl.stats}>
         <div className={cl.server}>
            <span className={cl.mode}>{mode} MODE</span>
            <span className={cl.multiplier}>x{multiplier}</span>
            <h4 className={cl.title}>
               CLANDAR <span>PROJECT</span>
            </h4>
            <img className={cl.logo} src={logoIcon} alt="" />
            <ul className={cl.statsList}>
               <li className={cl.statsListItem}>
                  <img src={usersIcon} alt="" />
                  {players}
               </li>
               <li className={cl.statsListItem}>
                  <img src={timeIcon} alt="" />
                  {time}
                  <span>{date}</span>
               </li>
               <li className={cl.statsListItem}>
                  ID: 126 <span>#AD24</span>
               </li>
            </ul>
         </div>
         <div className={cl.personal}>
            <div className={cl.gun}>
               <h6 className={cl.gunName}>{gun.name}</h6>
               <p className={cl.gunBullets}>
                  {gun.bullets} / <span>{gun.bullets}</span>
               </p>
               <img src={gunPng} alt="" />
            </div>
            <div className={cl.lvl}>
               <span className={cl.lvlNumber}>{lvl} Ур.</span>
               <ul className={cl.lvlStars}>
                  <li className={cl.lvlStarsItem}>
                     <img src={starIcon} alt="" />
                  </li>
                  <li className={cl.lvlStarsItem}>
                     <img src={starIcon} alt="" />
                  </li>
                  <li className={cl.lvlStarsItem}>
                     <img src={starIcon} alt="" />
                  </li>
                  <li className={cl.lvlStarsItem}>
                     <img src={starIcon} alt="" />
                  </li>
                  <li className={cl.lvlStarsItem}>
                     <img src={starIcon} alt="" />
                  </li>
               </ul>
            </div>
            <div className={cl.voice}>
               <img src={voiceIcon} alt="" />
            </div>
            <div className={cl.balance}>
               <p>
                  <img src={dollarIcon} alt="" />
                  {balance}
               </p>
               <span>
                  <img src={dollarIcon} alt="" />
                  {balance}
               </span>
            </div>
         </div>
      </div>
   );
};
