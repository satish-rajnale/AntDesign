import { Menu, Button, Typography } from 'antd';
import Complete from "./InputBar";
import React from 'react'
const { SubMenu } = Menu;

function MenuBar() {
    return (
        <Menu className ="navBar" theme="dark" mode="horizontal" >
      <Complete/>
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
      
    )
}

export default MenuBar;
