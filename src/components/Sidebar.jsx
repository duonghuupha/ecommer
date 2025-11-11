import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, HomeOutlined, DashboardOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const menuItems = [
  {
    key: '/home',
    icon: <HomeOutlined />,
    label: 'Home',
  },
  {
    key: '/about',
    icon: <InfoCircleOutlined />,
    label: 'About',
  },
  {
    key: '/dashboard',
    icon: <DashboardOutlined />,
    label: 'Dashboard',
    children: [
      { key: '/dashboard/1', label: 'Submenu 1' },
      { key: '/dashboard/2', label: 'Submenu 2' },
    ],
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className="app-sidebar"
      breakpoint="md"
      collapsedWidth="0"
    >
      <div className="sidebar-logo">IVYVET</div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        defaultOpenKeys={['/dashboard']}
        items={menuItems.map(item => ({
          key: item.key,
          icon: item.icon,
          label: item.label,
          children: item.children ? item.children.map(sub => ({
            key: sub.key,
            label: sub.label,
          })) : null
        }))}
      />
    </Sider>
  );
};

export default Sidebar;
