import DisplayNumber from "../components/DisplayNumber";
import {connect} from 'react-redux';

//store.subscribe 로 store 에 state 가 변하는지를 감지하고 있다가
//변하면 setState를 호출 해 렌더시키는 역할
const mapReduxStateToReactProps = (state) => {
    return {
        number: state.number,
    }
}

//connect를 실행하면 리턴값이 함수, 그 함수를 또 실행, 고차함수
export default connect(mapReduxStateToReactProps)(DisplayNumber);

// export default class extends Component{
//     state= {
//         number: store.getState().number
//     }
//     //store의 데이터가 바뀌었을 때 호출
//     constructor(props) {
//         super(props);
//         store.subscribe(() => {
//             this.setState({number:store.getState().number});
//         });
//     }
//     render() {
//         return <DisplayNumber number={this.state.number}/>
//     }
// }