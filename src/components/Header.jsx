import React from 'react';
import { Layout, Dropdown, Menu, Avatar, Badge } from 'antd';
import { BellOutlined, UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

const HeaderComponent = () => {
  const menu = (
    <Menu>
      <Menu.Item key="account">Tài khoản 1</Menu.Item>
      <Menu.Item key="logout">Đăng xuất</Menu.Item>
    </Menu>
  );

  return (
    <Header className="app-header">
      <div className="header-left">
        <div className="logo">IVYVET</div>
      </div>
      <div className="header-right">
        <Badge count={5}>
          <BellOutlined className="icon-bell" />
        </Badge>
        <Dropdown overlay={menu} placement="bottomRight">
          <div className="user-info">
            <Avatar icon={<UserOutlined />} />
            <span>Nguyen Van A</span>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default HeaderComponent;
