import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const SiteFooter = (props) => {
    return (
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Ant Design of React using Okta by <a rel="noopener noreferrer" target="_blank" href="https://profile.fishbowlllc.com">Nik Fisher</a></Footer>
    );

}

export default SiteFooter;