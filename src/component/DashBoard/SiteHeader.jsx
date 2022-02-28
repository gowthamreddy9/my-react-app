import React from 'react';


import { Layout, Menu } from 'antd'

const { Header } = Layout;

const SiteHeader = (props) => {
    
    // const { authState, authService } = useOktaAuth();

   
        return (
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="dashboard">Dashboard</Menu.Item>
                    <Menu.Item key="logout">Logout</Menu.Item>
                </Menu>
            </Header>
        );
    
 
        // return (

        //     <Header>
        //         <div className="logo" />
        //         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[props.selectedKey]}>
        //             <Menu.Item key="home"><a href="/">Home</a></Menu.Item>
        //             <Menu.Item key="login"><a href="/Login">Login</a></Menu.Item>
        //         </Menu>
        //     </Header>
        // );
    
};
export default SiteHeader;