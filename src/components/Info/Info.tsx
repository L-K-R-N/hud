import cl from './Info.module.scss';
import { FC, useEffect, useRef, useState } from 'react';
import cursorIcon from './assets/cursor.svg';
import menuIcon from './assets/menu.svg';
import bagIcon from './assets/bag.svg';
import friendIcon from './assets/friend.svg';
import voiceIcon from './assets/voice.svg';
import greenZoneIcon from './assets/greenZone.svg';
import markIcon from './assets/mark.svg';
interface IHotButton {
   id: number;
   name: string;
   icon: string;
}

interface Props {}
export const Info: FC<Props> = ({}) => {
   const [hotButtons, setHotButtons] = useState<IHotButton[]>([
      {
         id: 1,
         name: 'M',
         icon: menuIcon,
      },
      {
         id: 2,
         name: 'TAB',
         icon: bagIcon,
      },
      {
         id: 3,
         name: 'G',
         icon: friendIcon,
      },
      {
         id: 4,
         name: 'N',
         icon: voiceIcon,
      },
      {
         id: 5,
         name: '`',
         icon: cursorIcon,
      },
   ]);
   return (
      <div className={cl.info}>
         <div className={cl.zone}>
            <img className={cl.zoneImg} src={greenZoneIcon} alt="" />
            <p className={cl.zoneText}>Green zone</p>
         </div>
         <div className={cl.hotButtons}>
            {hotButtons.map((hb) => (
               <div className={cl.hotButtonsItem} key={hb.id}>
                  <img className={cl.hotButtonsItemImg} src={hb.icon} alt="" />
                  <p className={cl.hotButtonsItemName}>{hb.name}</p>
               </div>
            ))}
         </div>
         <div className={cl.location}>
            <p className={cl.district}>
               <img src={markIcon} alt="" /> Vinewood Hills
            </p>
            <span className={cl.place}>Chiliad mount</span>
         </div>
      </div>
   );
};
