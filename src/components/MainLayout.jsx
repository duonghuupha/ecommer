import React from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Sidebar from './Sidebar';
import '../styles/style.css';

const { Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout className="main-layout">
      <Sidebar />
      <Layout className="layout-right">
        <Header />
        <Content className="main-content">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
