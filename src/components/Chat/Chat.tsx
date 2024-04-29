import cl from './Chat.module.scss';
import { FC, useEffect, useRef, useState } from 'react';
import sendIcon from './assets/send.svg';

interface IMessageType {
   id: number;
   title: TMessageTypeTitle;
}

type TMessageTypeTitle = 'ME' | 'DO' | 'TRY' | 'OCC';

interface IMessage {
   id: number;
   name: string;
   text: string;
   typeId?: number;
}

interface Props {}
export const Chat: FC<Props> = ({}) => {
   const [value, setValue] = useState('');
   const inputRef = useRef<HTMLInputElement | null>(null);
   const messagesRef = useRef<HTMLDivElement | null>(null);
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
   const [messages, setMessages] = useState<IMessage[]>([
      {
         id: 1,
         name: 'Daniel Fodyanov (1)',
         text: 'Всем кууyy!',
      },
      {
         id: 2,
         name: 'Daniel Fodyanov (2)',
         text: 'Всем уу!',
      },
      {
         id: 3,
         name: 'Daniel Fodyanov (3)',
         text: 'Всем кууrkkkkyyyyуу!',
      },
      {
         id: 4,
         name: 'Daniel Fodyanov (4)',
         text: 'Всем кууyyytttttуу!',
         typeId: 2,
      },
   ]);

   useEffect(() => {
      if (!messagesRef.current) return;
      messagesRef.current.scrollTop = messagesRef.current?.scrollHeight;
   }, [messages]);

   useEffect(() => {
      inputRef.current?.focus();
   }, [activeMessageTypeId]);

   const handleSendMessage = () => {
      if (!value) return;

      setMessages([
         ...messages,
         {
            id: Date.now(),
            name: 'Daniel Fodyanov (4)',
            text: value,
            typeId: activeMessageTypeId,
         },
      ]);

      inputRef.current?.focus();

      setValue('');
   };
   return (
      <div className={cl.chat}>
         <div className={cl.messages} ref={messagesRef}>
            {messages.map((m) => (
               <div
                  className={[cl.message, m.typeId ? cl.active : ''].join(' ')}
                  key={m.id}
               >
                  {m.typeId && (
                     <span className={cl.messageType}>
                        {messageTypes.find((mt) => mt.id === m.typeId)?.title}
                     </span>
                  )}
                  <h6 className={cl.messageName}>{m.name}:</h6>
                  <p className={cl.messageText}>{m.text}</p>
               </div>
            ))}
         </div>
         <div className={cl.messageField}>
            <div className={cl.messageFieldType}>
               {messageTypes.find((mt) => mt.id === activeMessageTypeId)?.title}
            </div>
            <input
               className={cl.messageFieldInput}
               title={'Введите сообщение'}
               type="text"
               placeholder={'Єй бро, писать сюда нужно...'}
               onChange={(e) => setValue(e.target.value)}
               value={value}
               ref={inputRef}
            />

            <button
               className={cl.sendBtn}
               title="Отправить"
               onClick={handleSendMessage}
            >
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
                  key={mt.id}
               >
                  {mt.title}
               </span>
            ))}
         </div>
      </div>
   );
};
