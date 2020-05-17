import AddNumber from "../components/AddNumber";
import React, {Component} from "react";
import store from '../store';
import {connect} from 'react-redux';

export default connect()(AddNumber);
// export default class extends Component {
//     render() {
//         return <AddNumber onClick={ (size) => {
//             store.dispatch({type: 'INCREMENT', size});
//         }}/>
//     }
// }