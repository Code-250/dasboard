import React from 'react';
import {Layout,Row, Col, Space} from "antd";
import Logo from "../../assets/red_icon.png";
import './leftSideLayout.scss'
import {AiFillHome} from 'react-icons/ai';
import {IoSettings} from 'react-icons/io5';
import {BsFillPersonFill} from 'react-icons/bs';
import {BiLogOut} from 'react-icons/bi';

export const LeftLayout:React.FC = ()=>{
    return(
        <Layout>
            <Row style={{display:"flex", flexDirection:"column"}}>
                <Col className="leftside-logo">
                <img alt="" src={Logo} style={{width:"50px",height:"50px"}}/>
                </Col>
                <Col className="nav-links ">
                <Space direction="vertical" className="nav-link active">
                    <AiFillHome className="icon"/>
                    Home
                </Space>
                <Space direction="vertical" className="nav-link">
                    <BsFillPersonFill className="icon" />
                    Profile
                </Space>
                <Space direction="vertical" className="nav-link">
                    <IoSettings className="icon" />
                    Settings
                </Space>

                </Col>
                <Col className="logout-content">
                <Space direction="vertical" className="logout">
                    <BiLogOut className="icon"/>
                    logout
                </Space>
                </Col>
            </Row>
        </Layout>
    )
}