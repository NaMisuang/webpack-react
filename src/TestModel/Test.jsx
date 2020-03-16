/**
 * @field 测试
 */
import React, { Component } from "react"
import { Button } from 'antd';
import './test.less';

class Test extends Component {

  showModal = () => {
    alert(111111)
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <div>
          <div className="testMain">
            <div className="testMain-aaa">aaa</div>
            <div className="testMain-bbb">bbb</div>
          </div>

        </div>
      </div>
    );
  }
}

export default Test