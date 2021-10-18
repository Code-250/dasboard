import React from 'react';
import {Layout,Row, Typography, Col} from 'antd';
import "./dashboard.scss"

const {Header,Content, Sider} = Layout;

export const Dashboard:React.FC = ()=>{
    return(
        <Layout className="container">
            
            <Sider className="left-sider">left sidebar</Sider>
            <Layout>
                    <Header className="header">
                        <Row style={{display:"flex", justifyContent:"space-between"}}>
                            <Typography>
                                Organizer Portal
                            </Typography>
                            <Col style={{display:"flex", justifyContent:"space-between", width:"30vw"}}>
                                <Typography>
                                    Richard
                                </Typography>
                                <Typography>
                                    Notificaton
                                </Typography>
                                <Typography>
                                    help icon
                                </Typography>

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