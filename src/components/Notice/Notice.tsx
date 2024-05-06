import cl from './Notice.module.scss';
import errorIcon from './assets/error.svg';
import successIcon from './assets/success.svg';
import infoIcon from './assets/info.svg';
import { FC, useEffect, useRef, useState } from 'react';

export interface INotice {
   text: string;
   // time: string;
   type: TNoticeType;
   timeMs: number;
}

type TNoticeType = 'error' | 'success' | 'info';

export const Notice: FC<INotice> = ({ text, type, timeMs }) => {
   const noticeRef = useRef(null);

   return (
      <div
         className={[
            cl.notice,
            type === 'error'
               ? cl.error
               : type === 'info'
                 ? cl.info
                 : cl.success,
         ].join(' ')}
         ref={noticeRef}
      >
         <div className={cl.noticeHeader}>
            <img
               className={cl.noticeIcon}
               src={
                  type === 'error'
                     ? errorIcon
                     : type === 'success'
                       ? successIcon
                       : infoIcon
               }
               alt=""
            />
            <h4 className={cl.noticeTitle}>
               {type === 'error'
                  ? 'Ошибка!'
                  : type === 'success'
                    ? 'Успех!'
                    : 'Информация'}
            </h4>
            <div className={cl.noticeTimer}></div>
         </div>
         <p className={cl.noticeText}>{text}</p>
      </div>
   );
};
