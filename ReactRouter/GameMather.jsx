import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Lotto from "../6.로또/Lotto";
import RSP from "../5.가위바위보/RSP";
import NumberBaseball from "../3.숫자야구/NumberBaseball";

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
    if(this.props.match.params.name === 'number-baseball'){
        return <NumberBaseball/>
    } else if(this.props.match.params.name === 'rock-scissors-paper'){
        return <RSP/>
    } else if(this.props.match.params.name === 'lotto-generator'){
        return <Lotto/>
    }
    return (
        <diV>
            일치하는 게임이 없습니다.
        </diV>
    );
  }
}

export default GameMather;
