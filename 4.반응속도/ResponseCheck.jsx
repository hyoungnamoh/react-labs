//const React = require('react');
import React, { PureComponent } from 'react';

class ResponseCheck extends PureComponent {
    state = {
        state: 'waiting',
        message:'클릭해서 시작하세요',
        result:[],
    };
    //값이 바뀌어도 다시 렌더링하고 싶지 않은 친구들
    //state로 넣어버리면 얘네 바뀔때마다 다시 렌더링됨
    timeout;
    startTime;
    endTime;

    onClickScreen = () => {
      const { state, message, result } = this.state;
      if(state === 'waiting'){
        this.setState({
          state: 'ready',
          message:'초록색이 되면 클릭해주세요.',
        });
        this.timeout = setTimeout(() => {
          this.setState({
            state:'now',
            message:'지금 클릭!',
          });
          this.startTime=new Date();
          console.log(this.startTime);
        }, Math.floor(Math.random() * 1000) + 2000);
      } else if(state === 'ready'){//성급하게 클릭
      clearTimeout(this.timeout);
        this.setState({
          state: 'waiting',
          message: '이런 성급하셨군요 초록색이 되면 클릭해주세요.',
        })
      } else if(state === 'now'){ //반응속도 체크
        this.endTime=new Date();
        this.setState( (prevState) => {
          return {
            state:'waiting',
            result:[...prevState.result, this.endTime - this.startTime],
            message:'클릭해서 시작하세요.'
          };
        });
      }
    }

    renderAverage = () => {
        const {result} = this.state;
        return result.length === 0
        ? null
            : <>
              <div>평균 시간: {result.reduce((a, c) => a+c)/result.length}ms</div>
              <div><button onClick={this.onReset}>리셋</button></div>
              </>

    }

    onReset= () => {
      this.setState({
        result: [],
      })
    }
    render() {
        const {state, message} = this.state;
        return(
            <>
                <div
                    id="screen"
                    className={state}
                    onClick={this.onClickScreen}
                >
                    {message}
                </div>
                {this.renderAverage()}

            </>
        );
    };

}
//module.exports = ResponseCheck;
export default ResponseCheck;
