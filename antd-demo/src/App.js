import { Menu, Button, Typography } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  RightCircleFilled,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import React from 'react';
import './App.css';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { Divider } from 'antd';
import NormalLoginForm from './Form';
const { Header, Content, Footer } = Layout;


const { SubMenu } = Menu;

class App extends React.Component{
  
    state = {
      collapsed: false,
    };
  
 
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  

render(){
  return (
    <body>
    <Content className="mainBody">
     <Header>
     
      <Menu className ="navBar" theme="dark" mode="horizontal" >
      
        <Menu.Item className="navLink" key="5">Home</Menu.Item>
        <Menu.Item className="navLink" key="4">Cart</Menu.Item>
        <Menu.Item className="navLink" key="3">Products</Menu.Item>
        <Menu.Item className="navLink" key="2">Blogs</Menu.Item>
        <SubMenu  key="SubMenu" title="Anime">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item className="navLink" key="1">Products</Menu.Item>
        
       
      </Menu>
      
    </Header>
   
    <div className="posts">
    
    <Content
          className="site-layout-background1"
          style={{
            padding: 24,
            marginright: 20,
            width:200,
            color:'white',
            minHeight: 500,
            
            
          }}
        > <Col style={{color:'white',textAlign:'center',fontSize:18,fontWeight:300}} >RECENT POST...</Col>
        
        </Content>
        <Divider style={{ borderWidth: 2, borderColor: 'black',height: 500}} type="vertical" ></Divider><br></br>
        
    <Content
          className="site-layout-background2"
          style={{
            padding: 24,
            marginLeft: 10,
            width:500,
            color:'white',
            minHeight: 500,
            
            
          }}
        ><Col style={{color:'white',textAlign:'center',fontSize:18}}>
      NEW YORK FASHION DESK   
      </Col>
         
        </Content>
        </div>
        <Divider style={{ borderWidth: 2, borderColor: 'black' }}/>
   
    <div className ="menu"  style={{ width: 256 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Option 3
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
     

   
  

    </div>
     <div className="formBody"><div className="formTop"><div className="form"><NormalLoginForm/></div></div> </div>
    <div className="cardBody"></div>

     </Content></body>
  );
}
}

export default App;









