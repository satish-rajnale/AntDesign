import { Menu, Button, Typography } from 'antd';
import MenuBar from "./components/MenuBar";
import { List, Card } from 'antd';
import TabLine from './components/tabs';
import MyTimeLine from './components/timeline'
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
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

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
     <MenuBar/>
     
    </Header>
   
    <div className="posts">
    
    <Content
          className="site-layout-background1"
          style={{
            padding: 24,
            marginright: 20,
            width:200,
            color:'white',
            fontWeight:600,
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
     <List
     size= "small"
    grid={{ gutter: 4, column: 4 }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  />
    <div className="cardBody">
      <TabLine/>
    </div>
    <MyTimeLine/>
     </Content>
    
     </body>
  );
}
}

export default App;









