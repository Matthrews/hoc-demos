import React, {Component} from 'react';
import withAuth from "../HOC";

/**
 * VIP专用
 */
class PageB extends Component {
    render() {
        return (
            <div>
                <h2>VIP专用</h2>
            </div>
        );
    }
}

export default withAuth('VIP')(PageB);

