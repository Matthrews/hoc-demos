import React from 'react'

const App = (props) => {
    const {userInfo} = props;
    return (
        <div className="App">
            <h1>Learn React</h1>
            <p>
                {JSON.stringify(userInfo, null, 2)}
            </p>
        </div>
    );
}

/**
 * 在高阶组件里操作props
 * @param WrappedComponent
 * @constructor
 */
const HigherOrderComponent = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                userInfo: null
            }
        }

        componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users/1')
                .then(response => response.json())
                .then(data => this.setState({userInfo: data}))
        }

        render() {
            const {userInfo} = this.state;
            const newProps = {
                ...this.props,
                userInfo
            }
            return (
                <WrappedComponent {...newProps} />
            );
        }
    }
}


export default HigherOrderComponent(App);
