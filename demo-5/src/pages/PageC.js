import React, {Component} from 'react';
import withFetching from "../HOC";

/**
 * comments 列表
 */
class PageC extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data: []
    //     }
    // }
    //
    // async componentDidMount() {
    //     try {
    //         const data = await fetch('https://jsonplaceholder.typicode.com/comments?id_lte=10').then(response => response.json())
    //         this.setState({data})
    //
    //     } catch {
    //         this.setState({data: []})
    //     }
    // }

    render() {
        // const {data} = this.state;
        const {data} = this.props;
        return (
            <div>
                <h2>comments列表</h2>

                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        );
    }
}

// export default PageC;
const fetchingFunc = () => fetch('https://jsonplaceholder.typicode.com/comments?id_lte=10').then(response => response.json())

export default withFetching(fetchingFunc)(PageC);
