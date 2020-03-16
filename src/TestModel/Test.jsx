/**
 * @field 测试
 */
import React, { Component } from "react"
import { Button } from 'antd';

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
        hello  world
      </div>
    );
  }
}

export default Test