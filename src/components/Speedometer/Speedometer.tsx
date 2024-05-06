import cl from './Speedometer.module.scss';
import { FC, createElement, useEffect, useRef, useState } from 'react';
import lightIcon from './assets/light.svg';
import keyIcon from './assets/key.svg';
import lightningIcon from './assets/lightning.svg';
import lockIcon from './assets/lock.svg';
import fuelIcon from './assets/fuel.svg';

interface Props {
   speed: IData;
   nitro: IData;
   fuel: IData;
}

interface IData {
   max: number;
   current: number;
}
export const Speedometer: FC<Props> = ({ speed, nitro, fuel }) => {
   const nitroCurrentRef = useRef<HTMLDivElement | null>(null);
   const nitroMaxRef = useRef<HTMLDivElement | null>(null);
   const speedCurrentRef = useRef<HTMLDivElement | null>(null);
   const speedMaxRef = useRef<HTMLDivElement | null>(null);
   const fuelCurrentRef = useRef<SVGCircleElement | null>(null);
   const [sticks, setSticks] = useState([]);

   const drowingSticks = (
      barCount: number,
      percent: number,
      ref: React.MutableRefObject<HTMLDivElement | null>,
   ) => {
      if (!ref.current) return;

      for (let i = 0; i < barCount; i++) {
         const className = i < percent ? 'selected1' : '';
         const stick = createElement('i');

         ref.current.innerHTML += `<i style="--i: ${i};" class="${i < percent ? cl.selected1 : ''}"></i>`;
      }

      // ref.current.innerHTML += `<p class="selected percent-text text1">90%</p>`;
   };

   useEffect(() => {
      const nitroLength = 70;
      const nitroSticks = 24;

      drowingSticks(
         nitroSticks,
         (((nitroSticks * nitroLength) / 100) *
            ((nitro.current / nitro.max) * 100)) /
            100,
         nitroCurrentRef,
      );
      drowingSticks(
         nitroSticks,
         (nitroSticks * nitroLength) / 100,
         nitroMaxRef,
      );

      const speedLength = 67;
      const speedSticks = 61;
      drowingSticks(
         speedSticks,
         (((speedSticks * speedLength) / 100) *
            ((speed.current / speed.max) * 100)) /
            100,
         speedCurrentRef,
      );
      drowingSticks(
         speedSticks,
         (speedSticks * speedLength) / 100,
         speedMaxRef,
      );

      const fuelMin = 109 * 2 * Math.PI;
      const fuelMax = 171;
      const fuelDiff = fuelMin - fuelMax;
      if (fuelCurrentRef.current) {
         fuelCurrentRef.current.style.strokeDashoffset = `${fuelMin - fuelDiff * (fuel.current / fuel.max)}px`;
      }
   }, []);
   return (
      <div className={cl.speedometer}>
         {/* <img src={speedSvg} alt="" />
         <img src={petrolSvg} alt="" /> */}
         <div className={cl.nitroContainer}>
            <div className={cl.nitroMax} ref={nitroMaxRef}></div>
            <div className={cl.nitroCurrent} ref={nitroCurrentRef}></div>
         </div>
         <div className={cl.speedContainer}>
            <div className={cl.speedMax} ref={speedMaxRef}></div>
            <div className={cl.speedCurrent} ref={speedCurrentRef}></div>
         </div>

         <div className={cl.fuel}>
            <svg className={cl.fuelSvg}>
               <circle className={cl.fuelSvgBack} cx="114" cy="114" r="78" />
               <circle
                  ref={fuelCurrentRef}
                  className={cl.fuelSvgFront}
                  cx="114"
                  cy="114"
                  r="83"
               />
            </svg>
            <div className={cl.fuelCounter}>
               <img className={cl.fuelIcon} src={fuelIcon} alt="" />
               <span>{fuel.current}L</span>
            </div>
         </div>
         <div className={cl.center}>
            {speed.current < 10 ? (
               <span>
                  <span className={cl.dark}>00</span>
                  {speed.current}
               </span>
            ) : speed.current < 100 ? (
               <span>
                  <span className={cl.dark}>0</span>
                  {speed.current}
               </span>
            ) : (
               <span>{speed.current}</span>
            )}{' '}
            <span className={cl.small}>km/h</span>
         </div>
         <div className={cl.control}>
            <div>
               <img className={cl.lockIcon} src={lockIcon} alt="" />
            </div>
            <div>
               <img className={cl.keyIcon} src={keyIcon} alt="" />
            </div>
            <div>
               <img className={cl.lightIcon} src={lightIcon} alt="" />
            </div>
            <div>
               <img className={cl.lightningIcon} src={lightningIcon} alt="" />
            </div>
         </div>
      </div>
   );
};
