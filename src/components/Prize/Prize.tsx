import cl from './Prize.module.scss';
import { FC } from 'react';
import prizePng from './assets/prize.png';

interface Props {}

export const Prize: FC<Props> = ({}) => {
   return (
      <div className={cl.prize}>
         <h5 className={cl.prizeTitle}>
            ОТЫГРАЙ <span>5 ЧАСОВ</span> И ПОЛУЧИ ПРИЗ
         </h5>
         <span className={cl.prizeTime}>05:00:00</span>
         <img className={cl.prizeImg} src={prizePng} alt="" />
      </div>
   );
};
