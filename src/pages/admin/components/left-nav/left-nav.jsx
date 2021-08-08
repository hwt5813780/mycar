import React, {Component} from 'react'
// 引入withRouter，使得左边可以操作路由
import {withRouter, Link, Route} from 'react-router-dom'
// 引入prop-types
import PropTypes from 'prop-types'
// 引入消息订阅
import PubSub from 'pubsub-js'
// 引入图片
import LoginImg from './image/login.png'
// 引入样式
import './css/left-nav.css'
// 引入目录JSON文件
import menus from './config/menuConfig.json'
// 引入字体图标
// import './fonts/iconfont.css'
// 引入组件
import {Layout, Menu} from 'antd'
import {FileTextOutlined, HomeOutlined, LogoutOutlined, PlusSquareOutlined, TeamOutlined} from "@ant-design/icons";
// 引入管理员数据
//import {getUser} from '../../../../api/adminApi'
//import config from "../../../../config/config";
// 引入Slider
const {Sider} = Layout;
const {Item, SubMenu} = Menu

class LeftNav extends Component {
    static propTypes = {
        collapsed: PropTypes.bool.isRequired
    };
    render() {
        return (
            <Sider trigger={null} collapsible collapsed={this.props.collapsed}
                   style={{overflow: 'auto',
                       height: '100vh',
                       position: 'fixed',
                       left: 0,}}>
                <div className="logo_admin" style={this.props.collapsed ? {position:"relative",width:30,left:5} : {}}>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                >
                    <Menu.Item key={"/app"}>
                        <Link to={"/app"}>
                            <HomeOutlined style={this.props.collapsed ? {fontSize: 20} : {}}/>
                            <span style={this.props.collapsed ? {display: 'none'} : {}}>Home</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"/app/form"}>
                        <Link to={"/app/form"}>
                            <FileTextOutlined style={this.props.collapsed ? {fontSize: 20} : {}}/>
                            <span style={this.props.collapsed ? {display: 'none'} : {}}>Car List</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"/app/inlist"}>
                        <Link to={"/app/inlist"}>
                            <PlusSquareOutlined style={this.props.collapsed ? {fontSize: 20} : {}}/>
                            <span style={this.props.collapsed ? {display: 'none'} : {}}>Car In</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"/app/outlist"}>
                        <Link to={"/app/outlist"}>
                            <LogoutOutlined style={this.props.collapsed ? {fontSize: 20} : {}}/>
                            <span style={this.props.collapsed ? {display: 'none'} : {}}>Car Out</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"/staff"}>
                        <Link to={"/staff"}>
                            <TeamOutlined style={this.props.collapsed ? {fontSize: 20} : {}}/>
                            <span style={this.props.collapsed ? {display: 'none'} : {}}>Staff</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default withRouter(LeftNav);