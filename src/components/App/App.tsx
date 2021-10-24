import React, { FC, useState } from 'react';
import { Tickets } from 'components';
import cn from 'classnames';
import logo from 'assets/icons/Logo.png';

import './index.scss';

export const App: FC = () => {
  const [activeCheapTab, setaActiveCheapTab] = useState<boolean>(true);
  const [activeFastTab, setActiveFastTab] = useState<boolean>(false);

  const cheapTabHandler = () => {
    setaActiveCheapTab(true);
    setActiveFastTab(false);
  };
  const fastTabHandler = () => {
    setaActiveCheapTab(false);
    setActiveFastTab(true);
  };

  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="aviatickets" />
      </div>
      <div className="main">
        <div className="transfers-filter">
          <div className="transfers-filter__title">
            КОЛИЧЕСТВО
          </div>
          <div className="transfers-filter__boxes">
            <div className="transfers-filter__box">
              <input type="checkbox" id="box-all" />
              <label htmlFor="box-all">Все</label>
            </div>
            <div className="transfers-filter__box">
              <input type="checkbox" id="box-without" />
              <label htmlFor="box-without">Без пересадок</label>
            </div>
            <div className="transfers-filter__box">
              <input type="checkbox" id="box-without" />
              <label htmlFor="box-without">1 пересадка</label>
            </div>
            <div className="transfers-filter__box">
              <input type="checkbox" id="box-without" />
              <label htmlFor="box-without">2 пересадки</label>
            </div>
            <div className="transfers-filter__box">
              <input type="checkbox" id="box-without" />
              <label htmlFor="box-without">3 пересадки</label>
            </div>
          </div>
        </div>
        <div className="header-tickets">
          <div className="header-filter">
            <div
              className={cn('header-filter__tab tab-left', { 'active-tab': activeCheapTab })}
              onClick={cheapTabHandler}
            >
                САМЫЙ ДЕШЕВЫЙ
            </div>
            <div
              className={cn('header-filter__tab tab-right', { 'active-tab': activeFastTab })}
              onClick={fastTabHandler}
            >
                САМЫЕ БЫСТРЫЙ
            </div>
          </div>
          <div className="app-tickets">
            <Tickets />
          </div>
        </div>
      </div>
    </div>
  );
};
