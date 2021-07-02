import React from 'react';
import logo from 'assets/icons/Logo.png';

import './index.scss';

const App = () => {
  const defaultReact: string = 'default-react';
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="aviatickers" />
      </div>
      <div className="main">
        <div className="transfers">
          <div className="transfers-title">
            Количество пересадок
          </div>
          <div className="transfers-boxes">
            <div className="transfers-box">
              <input type="checkbox" id="box-all" />
              <label htmlFor="box-all">Все</label>
            </div>
            <div className="transfers-box">
              <input type="checkbox" id="box-without" />
              <label htmlFor="box-without">Без пересадок</label>
            </div>
          </div>
        </div>
        <div className="main__filters-tickets">
          <div className="filters">
            <div className="filters-tab">Самый дешевый</div>
            <div className="filters-tab">Самый быстрый</div>
            <div className="filters-tab">Оптимальный</div>
          </div>
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
