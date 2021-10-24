import React, { FC } from "react";
import logo from 'assets/icons/Logo.png';

import './index.scss';

export const Ticket: FC = () => {
  return (
    <div className="ticket">
      <div className="header">
        <span>13400 P</span>
        <img src={logo} alt="aviacompany logo" />
      </div>
      <div className="main">
        <div className="info">
          <div className="direction">
            <div className="direction__header header-mod">MOW-HKT</div>
            <div className="direction__value">10:45 - 08:00</div>
          </div>
          <div className="duration">
            <div className="duration__header header-mod">В ПУТИ</div>
            <div className="duration__value">21ч 15м</div>
          </div>
          <div className="transfers">
            <div className="transfers__header header-mod">2 ПЕРЕСАДКИ</div>
            <div className="transfers__value">DUB, TSP</div>
          </div>
        </div>
        <div className="info">
          <div className="direction">
            <div className="direction__header header-mod">MOW-HKT</div>
            <div className="direction__value">10:45 - 08:00</div>
          </div>
          <div className="duration">
            <div className="duration__header header-mod">В ПУТИ</div>
            <div className="duration__value">21ч 15м</div>
          </div>
          <div className="transfers">
            <div className="transfers__header header-mod">2 ПЕРЕСАДКИ</div>
            <div className="transfers__value">DUB, TSP</div>
          </div>
        </div>
      </div>
    </div>
  );
};
