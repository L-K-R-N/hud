import cl from './Quest.module.scss';
import { FC, useState } from 'react';
import starIcon from './assets/star.svg';
import timeIcon from './assets/time.svg';
interface IQuest {
   name: string;
   text: string;
   exp: number;
   price: number;
   time: number;
}

interface Props {
   quest: IQuest;
}

export const Quest: FC<Props> = ({ quest }) => {
   return (
      <div className={cl.quest}>
         <h5 className={cl.questName}>
            <img src={starIcon} alt="" /> {quest.name}
         </h5>
         <p className={cl.questText}>{quest.text}</p>
         <div className={cl.questInfo}>
            <span className={cl.questExp}>{quest.exp} exp</span>
            <span className={cl.questPrice}>${quest.price}</span>
            <span className={cl.questTime}>
               <span>00:00</span> <img src={timeIcon} alt="" />
            </span>
         </div>
      </div>
   );
};
