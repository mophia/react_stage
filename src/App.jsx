import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { WechatOutlined } from '@ant-design/icons';

export default class App extends Component {
  render() {
    return (
      <>
        <div>App</div>
        <Button type="link">点我</Button>
        <WechatOutlined />
      </>
    );
  }
}
