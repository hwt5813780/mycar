import React, {Component} from 'react'
import {connect} from 'react-redux'
// 引入路由组件
import {Switch, Redirect, Route} from 'react-router-dom'
import PubSub from 'pubsub-js'
// 引入layout依赖
import {Layout, Modal} from 'antd';
// 引入组件
import LeftNav from './components/left-nav/left-nav'
import RightHead from './components/right-head/right-head'
// 引入样式
import './css/admin.css'
// 引入判断是否登录函数
import {isLogin} from '../../api/adminApi'
// 引入一级路由


/*import HeaderCustom from './HeaderCustom';
import MIndex from '../index/Index';
import Calendars from '../header/Calendars';
import UForm from '../form/Form';
import InList from '../stockin/InList';
import noMatch from './404';
import OutList from "../stockout/OutList";*/

import Staff from "./../staff/staff";
// 引入layout中内容
const {Content, Footer} = Layout;


class Admin extends Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    componentDidMount() {
        // 订阅token失效信息
        PubSub.subscribe('tokenOut', (msg) => {
            if (msg === 'tokenOut') {
                Modal.warning({
                    title: '登录信息已经失效',
                    content: (
                        <div>
                            <p>请重新登录后再操作</p>
                        </div>
                    ),
                    onOk: () => {
                        this.props.history.replace('/login');
                    }
                })
            }
        })
    }

    componentWillUnmount() {
        // 销毁消息
        PubSub.unsubscribe('tokenOut')
    }

    render() {
        // 判断是否是登录的
        if (!isLogin()) {
            return <Redirect to={'/login'}/>
        }
        const collapsed = this.state.collapsed;
        return (
            <Layout className='admin-pane' >
                <LeftNav collapsed={collapsed} />
            <Layout style={{ marginLeft: 200 }}>
                <div className='rightSide'>
                    <RightHead collapsed={collapsed} toggle={this.toggle}/>
                </div>
                <Content className='admin-content' >
                    <Switch>
                        {/*<Route exact path={'/app'} component={MIndex} />
                        <Route exact path={'/app/form'} component={UForm} />
                        <Route exact path={'/app/inlist'} component={InList} />
                        <Route exact path={'/app/outlist'} component={Outlist} />*/}
                        <Route path={'/staff'} component={Staff}/>
                    </Switch>
                </Content>
                <foot>
                    <h4 style={{textAlign:"center"}}>Weiting Huang@Used Car 2020-2021</h4>
                </foot>
            </Layout>
            </Layout>
        );
    }
}

export default connect(null, null)(Admin);