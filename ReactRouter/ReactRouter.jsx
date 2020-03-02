import React from 'react';
import {BrowserRouter, HashRouter, Route, Link} from 'react-router-dom';
import NumberBaseBall from '../3.숫자야구/NumberBaseBall';
import RSP from '../5.가위바위보/RSP';
import Lotto from '../6.로또/Lotto';
import GameMather from "./GameMather";


const ReactRouter = () => {
  return (
    <HashRouter>
      <div>
        공통인 부분
        <br/>
        <Link to = "/game/number-baseball">숫자야구</Link>
        <br/>
        <Link to = "/game/rock-scissors-paper">가위바위보</Link>
        <br/>
        <Link to = "/game/lotto-generator">로또</Link>
        <br/>
        <Link to = "/game/index">게임매쳐</Link>
        <br/>
      </div>
      <div>
        <Route path="/game/:name" component={GameMather}/>
      </div>
    </HashRouter>
  );
};

export default ReactRouter;
