import React from "react";

const defaultMessageMap = {
    'Admin': <div>您没有权限查看该页面，请联系管理员！</div>,
    'VIP': <div>您未购买该模块，请联系销售试用！</div>,
    '': null
}

/**
 * 权限控制
 * @param role
 */
const withAuth = role => (WrappedComponent) => {
    return class extends React.Component {
        state = {
            auth: false,
            role: ''
        }

        async UNSAFE_componentWillMount() {
            try {
                const {role: currentRole} = await fetch('//localhost:9090/userInfo').then(response => response.json())
                this.setState({
                    auth: currentRole === role,
                    role: currentRole
                });
            } catch {
                this.setState({
                    auth: false,
                });
            }

        }


        render() {
            if (this.state.auth) {
                return <WrappedComponent {...this.props} />;
            }
            return defaultMessageMap[this.state.role]
        }
    };
}


export default withAuth
