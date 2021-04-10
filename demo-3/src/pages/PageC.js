import React, {Component} from 'react';
import withAuth from "../HOC";

/**
 * 普通用户使用
 */
class PageC extends Component {
    render() {
        return (
            <div>
                <h2>普通用户使用</h2>
            </div>
        );
    }
}

export default PageC;
