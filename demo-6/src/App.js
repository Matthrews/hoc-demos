import React, {Component} from 'react';
import {is, Map} from 'immutable'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Map({times: 0})
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const thisProps = this.props || {};
        const thisState = this.state || {};

        if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
            Object.keys(thisState).length !== Object.keys(nextState).length) {
            return true
        }

        for (const key in nextProps) {
            if (nextProps.hasOwnProperty(key) && !is(thisProps[key], nextProps[key])) {
                return true
            }
        }

        for (const key in nextState) {
            if (nextState.hasOwnProperty(key) && !is(thisState[key], nextState[key])) {
                return true
            }
        }

        return false
    }

    handleAdd = () => {
        this.setState(({data}) => {
            return {
                data: data.update('times', v => v + 1)
            }
        });
        console.log('handleAdd', this.state.data.get('times'))
    }

    render() {
        const {data} = this.state;
        console.log('times', data)
        return (
            <div>
                <h2>Learn React</h2>
                <span>{data.get('times')}</span>
                <br/>
                <button type="button" onClick={this.handleAdd}>测试点击次数</button>
            </div>
        );
    }
}

export default App;
