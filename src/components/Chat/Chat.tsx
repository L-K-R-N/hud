import cl from './Chat.module.scss';
import { FC, useState } from 'react';
import sendIcon from './assets/send.svg';

interface IMessageType {
   id: number;
   title: string;
}

interface Props {}
export const Chat: FC<Props> = ({}) => {
   const [value, setValue] = useState('');
   const [messageTypes, setMessageTypes] = useState<IMessageType[]>([
      {
         id: 1,
         title: 'ME',
      },
      {
         id: 2,
         title: 'DO',
      },
      {
         id: 3,
         title: 'TRY',
      },
      {
         id: 4,
         title: 'OCC',
      },
   ]);
   const [activeMessageTypeId, setActiveMessageTypeId] = useState(1);
   return (
      <div className={cl.chat}>
         <div className={cl.messages}></div>
         <div className={cl.messageField}>
            <div className={cl.messageType}>
               {messageTypes.find((mt) => mt.id === activeMessageTypeId)?.title}
            </div>
            <input
               className={cl.messageInput}
               title={'Введите сообщение'}
               type="text"
               placeholder={'Єй бро, писать сюда нужно...'}
               onChange={(e) => setValue(e.target.value)}
               value={value}
            />

            <button className={cl.sendBtn} title="Отправить">
               <img src={sendIcon} alt="" />
            </button>
         </div>
         <div className={cl.messageTypes}>
            {messageTypes.map((mt) => (
               <span
                  className={[
                     cl.messageTypesItem,
                     mt.id === activeMessageTypeId ? cl.active : '',
                  ].join(' ')}
                  onClick={() => setActiveMessageTypeId(mt.id)}
               >
                  {mt.title}
               </span>
            ))}
         </div>
      </div>
   );
};
