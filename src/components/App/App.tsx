import React from 'react';
import logo from 'assets/icons/Logo.png';

import './index.scss';

const App = () => {
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
            <div className="header-filter__tab">САМЫЙ ДЕШЕВЫЙ</div>
            <div className="header-filter__tab">САМЫЕ БЫСТРЫЙ</div>
          </div>
          {/* TODO вынести в компонент */}
          <div className="tickets">
            <div className="ticket">ticket 1</div>
            <div className="ticket">ticket 1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
