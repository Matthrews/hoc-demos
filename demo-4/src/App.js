import React from 'react'

/**
 * 利用【反向继承】实现的一个高阶组件，功能是计算被包裹组件的渲染时间
 * @param WrappedComponent
 */
function withTiming(WrappedComponent) {
    return class extends WrappedComponent {
        constructor(props) {
            super(props);
            this.start = 0;
            this.end = 0;
        }

        UNSAFE_componentWillMount() {
            super.UNSAFE_componentWillMount && super.UNSAFE_componentWillMount();
            this.start = Date.now();
        }

        componentDidMount() {
            super.componentDidMount && super.componentDidMount();
            this.end = Date.now();
            console.log(`${WrappedComponent.name} 组件渲染时间为 ${this.end - this.start} ms`);
        }

        render() {
            return super.render();
        }
    };
}

/**
 * 组件渲染性能追踪
 */
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Learn React</h1>
            </div>
        );
    }
}


export default withTiming(App)
