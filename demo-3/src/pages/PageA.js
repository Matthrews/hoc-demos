import React, {Component} from 'react';
import withAuth from "../HOC";

/**
 * 管理员专用
 */
class PageA extends Component {
    render() {
        return (
            <div>
                <h2>管理员专用</h2>
            </div>
        );
    }
}

export default withAuth('Admin')(PageA);
