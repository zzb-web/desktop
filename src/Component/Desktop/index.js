import React from 'react';
import {Row,Col,Layout} from 'antd';
import './style.css';
const { Header, Footer, Sider, Content } = Layout;

class DeskTop extends React.Component{
    constructor(){
        super();
        this.state={
            contentHeight:0
        }
    }
    render(){
        const {contentHeight} = this.state;
        return(
            <div className='desktop'>
                <Row>
                <Col span={2}></Col>
                <Col span={20}>
                    <Header>Header</Header>
                    <Content style={{marginTop:10,overflow:'auto'}}>
                        <Row>
                            <Col span={3}>
                                <div className='slider'></div>
                            </Col>
                            <Col span={21}>
                                <div className='task-options'>
                                    <Row>
                                        <Col span={6}>
                                            <div className='shard'>
                                            </div>
                                        </Col>
                                        <Col span={6}>
                                            <div className='shard'></div>
                                        </Col>
                                        <Col span={6}>
                                            <div className='shard'></div>
                                        </Col>
                                        <Col span={6}>
                                            <div className='shard'></div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className=''>
                                    <Row>
                                        <Col span={16}>
                                            <div className='map'></div>
                                        </Col>
                                        <Col span={8}>
                                            <div className='key-area'></div>
                                            <div className='key-area'></div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Content>
                    <Footer>Footer</Footer>
                </Col>
                <Col span={2}></Col>
                </Row>
            </div>
        )
    }
    // componentDidMount(){
    //     let that = this;
    //     let allHeight = document.documentElement.clientHeight;
    //     this.setState({
    //       contentHeight :　allHeight-130
    //     })
    //     window.onresize = function(){
    //       let allHeight = document.documentElement.clientHeight;
    //       that.setState({
    //         contentHeight :　allHeight-130
    //       })
    //     }
    // }
}
export default DeskTop;