import React from 'react'
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";


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
                <PageA/>
                <PageB/>
                <PageC/>
            </div>
        );
    }
}


export default App
