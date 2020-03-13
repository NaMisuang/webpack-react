/**
 * @field 测试
 */
import React, { Component } from "react"
import { Button } from 'antd';

class Test extends Component {

  showModal = () => {
    alert(1111)
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>

      </div>
    );
  }
}

export default Test