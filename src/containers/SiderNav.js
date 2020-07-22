import React from 'react';
import {Menu} from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';
import MenuLink from '../components/MenuLink';
import {useRouteMatch } from 'react-router-dom';
const SiderNav = () => {

    const {path} = useRouteMatch();
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                <MenuLink to={path} title="My accounts"/>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <MenuLink to={`${path}/profile`} title="Profile"/>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
                <MenuLink to={`${path}/history`} title="History"/>
            </Menu.Item>
        </Menu>
    );
};

export default SiderNav;