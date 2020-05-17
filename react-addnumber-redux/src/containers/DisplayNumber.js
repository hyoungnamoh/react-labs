import DisplayNumber from "../components/DisplayNumber";
import React, {Component} from "react";
import store from "../store";

export default class extends Component{
    state= {
        number: store.getState().number
    }
    //store의 데이터가 바뀌었을 때 호출
    constructor(props) {
        super(props);
        store.subscribe(() => {
            this.setState({number:store.getState().number});
        });
    }
    render() {
        return <DisplayNumber number={this.state.number}/>
    }
}