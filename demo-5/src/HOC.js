import React from "react";

const withFetching = fetchingFunc => WrappedComponent => {
    return class extends React.Component {
        state = {
            data: [],
        }

        async componentDidMount() {
            try {
                const data = await fetchingFunc();
                console.log('data', data)
                this.setState({
                    data,
                });

            } catch {
                this.setState({data: []})
            }
        }

        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />;
        }
    }
}

export default withFetching
