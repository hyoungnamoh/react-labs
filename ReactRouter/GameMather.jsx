import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class GameMather extends Component{
  render() {
    console.log(this.props);
    /*
    {history: {…}, location: {…}, match: {…}, staticContext: undefined}
    history: {length: 12, action: "PUSH", location: {…}, createHref: ƒ, push: ƒ, …}
    location: {pathname: "/game/number-baseball", search: "", hash: "", state: undefined}
    match: {path: "/game/:name", url: "/game/number-baseball", isExact: true, params: {…}}
    staticContext: undefined
    __proto__: Object
    부모 Router 컴포넌트가 props에 이렇게 넣어서 보내줌

    연결되지 않은 컴포넌트에서 얘네를 사용하고 싶으면 withRouter로 export부분 감싸주면 됨
    */
    return (
      <div>게임매쳐</div>
    );
  }
}

export default GameMather;
