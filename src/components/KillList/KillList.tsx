import cl from './KillList.module.scss';
import { FC, useState } from 'react';
import gunIcon from './assets/gun.png';
interface IKillItem {
   id: number;
   killerName: string;
   victimName: string;
   gunIcon: string;
}

interface Props {}
export const KillList: FC<Props> = ({}) => {
   const [kills, setKills] = useState<IKillItem[]>([
      {
         id: 1,
         killerName: 'Daniel Fodyanov',
         victimName: 'Daniel Fodyanov',
         gunIcon: gunIcon,
      },
      {
         id: 2,
         killerName: 'Daniel Fodyanov',
         victimName: 'Daniel Fodyanov',
         gunIcon: gunIcon,
      },
   ]);
   return (
      <div className={cl.killList}>
         {kills.map((k) => (
            <div className={cl.killListItem} key={k.id}>
               <span className={cl.killer}>{k.killerName}</span>
               <img src={k.gunIcon} alt="" />
               <span className={cl.victim}>{k.victimName}</span>
            </div>
         ))}
      </div>
   );
};
