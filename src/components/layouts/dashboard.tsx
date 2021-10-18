import React from 'react';
import {Layout,Row, Typography, Col} from 'antd';
import "./dashboard.scss"
import {QuestionCircleOutlined} from '@ant-design/icons';
import Avatar from "@mui/material/Avatar";
import Profile from '../../assets/red_icon.png'
import {IoMdNotifications} from 'react-icons/io'
 

const {Header,Content, Sider} = Layout;
const {Title} =Typography
export const Dashboard:React.FC = ()=>{
    return(
        <Layout className="container">
            
            <Sider className="left-sider">left sidebar</Sider>
            <Layout>
                    <Header className="header">
                        <Row style={{display:"flex", justifyContent:"space-between"}}>
                            <Title level={2}style={{textAlign:"center", lineHeight:"2"}}>
                                Organizer Portal
                            </Title>
                            <Col style={{display:"flex", justifyContent:"space-between",alignItems:"center", width:"20vw"}}>
                               
                                <QuestionCircleOutlined style={{fontSize:"18px"}}/>
                                <Col style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"10vw"}}>
                                    <Avatar style={{width:"25px", height:"25px"}} alt="profile pic" src={Profile}/>
                                    Richard Munye
                                </Col>
                                    <IoMdNotifications style={{fontSize:"18px"}}/>

                            </Col>
                        </Row>
                    </Header>
                <Layout>
                    <Content>main content</Content>
                <Sider className="right-sider">right sidebar</Sider>
                </Layout>
                
            </Layout>
        </Layout>
    )
}