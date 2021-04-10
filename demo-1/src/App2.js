import React from 'react'

const App2 = (props) => {
    const {name: {value, onChange}} = props;
    return (
        <div className="App">
            <h1>Learn React</h1>
            <input type="text" value={value} onChange={(e) => onChange(e.target.value)}/>
        </div>
    );
}

/**
 * 在高阶组件里抽离 state
 * @param WrappedComponent
 * @constructor
 */
const withOnChange = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: ''
            }
        }

        onChange = (newName) => {
            console.log('onChange', newName)
            this.setState({name: newName})
        }


        render() {
            const {name} = this.state;
            const newProps = {
                name: {
                    value: name,
                    onChange: this.onChange
                }
            }
            return (
                <WrappedComponent {...newProps} />
            );
        }
    }
}


export default withOnChange(App2);
