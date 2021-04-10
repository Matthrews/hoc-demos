import React, {Component, createRef} from 'react'

class App3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    onChange = (e) => {
        this.setState({value: e.target.value})
    }

    componentDidMount() {
        console.log('App3 componentDidMount')
    }

    render() {
        const {value} = this.state
        return (
            <div className="App">
                <h1>Learn React</h1>
                <input type="text" value={value} onChange={this.onChange}/>
            </div>
        );
    }
}

/**
 * 在高阶组件里通过 ref 访问到组件实例
 * @param WrappedComponent
 * @constructor
 */
const HigherOrderComponent = (WrappedComponent) => {
    return class extends React.Component {

        componentDidMount() {
            console.log('HigherOrderComponent componentDidMount', this.instance.state, this.instance.onChange)
        }

        render() {
            return (
                // 注意：不能在函数组件上使用 ref 属性，因为无状态组件没有实例。
                <WrappedComponent {...this.props} ref={(obj) => this.instance = obj}/>
            );
        }
    }
}


export default HigherOrderComponent(App3);
