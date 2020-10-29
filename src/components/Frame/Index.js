import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Dropdown, Avatar, message } from 'antd';
import { adminRoutes } from '../../routes/index';
import logo from './logo.svg';
import './Index.css';
import { clearToken } from '../../utils/auth';
import { ShopOutlined, BarChartOutlined, DownOutlined } from '@ant-design/icons'

const { Header, Content, Sider } = Layout;

const routes = adminRoutes.filter(route => route.isShow);

function Index(props) {
    const popMenu = (
        <Menu onClick={(p) => {
            if (p.key === 'logOut') {
                clearToken();
                props.history.push('/login');
            } else {
                message.info(p.key); // 提示
            }
        }}>
            <Menu.Item key="noti">通知中心</Menu.Item>
            <Menu.Item key="setting">设置</Menu.Item>
            <Menu.Item key="logOut">退出</Menu.Item>
        </Menu>
    )

    return (
        <div>
            <Layout>
                <Header className="header">
                    <div className="logo">
                        <img src={logo} alt="logo" className="logoImg" />
                        <h3 className="logoText">react学习</h3>
                    </div>
                    <Dropdown overlay={popMenu}>
                        <div className="popMenu">
                            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf', marginRight: '5px' }}>U</Avatar>
                            <span>超级管理员</span>
                            <DownOutlined />
                        </div>
                    </Dropdown>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}>
                            {
                                routes.map(route => {
                                    let icon;
                                    if (route.icon === 'shop') {
                                        icon = <ShopOutlined />;

                                    } else {
                                        icon = <BarChartOutlined />;
                                    }
                                    return (
                                        <Menu.Item key={route.path} onClick={p => props.history.push(p.key)}>
                                            {icon}
                                            {route.title}
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 0 0 16px' }}>
                        <Content className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                                backgroundColor: '#fff'
                            }}>
                            {props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default withRouter(Index);
