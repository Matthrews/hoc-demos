import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }


    render() {
        return (
            <div className="App">
                <h1>Learn React</h1>
                <p>
                    {JSON.stringify(this.state, null, 2)}
                    {JSON.stringify(this.props, null, 2)}
                </p>
            </div>
        );
    }
}


function withLogging(WrappedComponent) {
    class Enhance extends WrappedComponent {
        UNSAFE_componentWillReceiveProps(nextProps) {
            console.log('Current props', this.props);
            console.log('Next props', nextProps);
        }

        render() {
            const {forwardedRef, ...rest} = this.props;
            // 把 forwardedRef 赋值给 WrappedComponent 的 ref
            return <WrappedComponent {...rest} ref={forwardedRef}/>;
        }
    }

    // React.forwardRef 方法会传入 props 和 ref 两个参数给其回调函数
    // 所以这边的 ref 是由 React.forwardRef 提供的
    return React.forwardRef((props, ref) => {
        return <Enhance {...props} data={123} forwardRef={ref}/>
    });
}


export default withLogging(App)
