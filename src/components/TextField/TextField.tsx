import cl from './TextField.module.scss';

import React, { ChangeEvent, useId } from 'react';

interface TextFieldProps {
   title: string;
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
   placeholder?: string;
   value: string;
}
export const TextField = React.forwardRef<
   HTMLInputElement | null,
   TextFieldProps
>(({ title, onChange, value, placeholder }, ref) => {
   const id = useId();
   return (
      <div className={cl.textField}>
         <label htmlFor={id} className={cl.textFieldLabel}>
            {title}
         </label>
         <input
            title={title}
            type="text"
            id={id}
            className={cl.textFieldInput}
            placeholder={placeholder ? placeholder : title}
            onChange={onChange}
            value={value}
            ref={ref}
         />
      </div>
   );
});
