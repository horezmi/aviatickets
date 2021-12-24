import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tickets } from 'components';
import cn from 'classnames';
import logo from 'assets/icons/Logo.png';

import { tabFast, tabCheap } from 'actions/tabsActions';
import {
  transfersAll,
  transfersOne,
  transfersTwo,
  transfersThree,
  transfersNone
} from 'actions/transfersActions';

import './index.scss';

export const App: FC = () => {
  const dispatch = useDispatch();
  const tabsState = useSelector((s: any) => s.tabs);
  const transfersState = useSelector((s: any) => s.transfers);

  const cheapTabHandler = () => {
    dispatch(tabCheap());
  };
  const fastTabHandler = () => {
    dispatch(tabFast());
  };

  const allTransfersHandler = ({ target: { checked } }: any) => {
    dispatch(transfersAll(checked));
  };
  const oneTransfersHandler = ({ target: { checked } }: any) => {
    dispatch(transfersOne(checked));
  };
  const twoTransfersHandler = ({ target: { checked } }: any) => {
    dispatch(transfersTwo(checked));
  };
  const threeTransfersHandler = ({ target: { checked } }: any) => {
    dispatch(transfersThree(checked));
  };
  const noneTransfersHandler = ({ target: { checked } }: any) => {
    dispatch(transfersNone(checked));
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
              <input onChange={allTransfersHandler} checked={transfersState.all} type="checkbox" id="box-all" />
              <label htmlFor="box-all">Все</label>
            </div>
            <div className="transfers-filter__box">
              <input onChange={noneTransfersHandler} checked={transfersState.none} type="checkbox" id="box-without" />
              <label htmlFor="box-without">Без пересадок</label>
            </div>
            <div className="transfers-filter__box">
              <input onChange={oneTransfersHandler} checked={transfersState.one} type="checkbox" id="box-1" />
              <label htmlFor="box-1">1 пересадка</label>
            </div>
            <div className="transfers-filter__box">
              <input onChange={twoTransfersHandler} checked={transfersState.two} type="checkbox" id="box-2" />
              <label htmlFor="box-2">2 пересадки</label>
            </div>
            <div className="transfers-filter__box">
              <input onChange={threeTransfersHandler} checked={transfersState.three} type="checkbox" id="box-3" />
              <label htmlFor="box-3">3 пересадки</label>
            </div>
          </div>
        </div>
        <div className="header-tickets">
          <div className="header-filter">
            <div
              className={cn('header-filter__tab tab-left', { 'active-tab': tabsState.cheap })}
              onClick={cheapTabHandler}
            >
              САМЫЙ ДЕШЕВЫЙ
            </div>
            <div
              className={cn('header-filter__tab tab-right', { 'active-tab': tabsState.fast })}
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
