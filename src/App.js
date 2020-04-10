import React, { Component } from "react"
import Test from "./TestModel/Test.jsx"
import './app.less'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            height: "768px",
            weight: "1024px"
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this)) //监听滚动
        window.addEventListener("resize", this.handleResize.bind(this))//监听窗口
    }

    componentWillUnmount() {
        //卸载监听器
        window.removeEventListener('scroll', this.handleScroll.bind(this))
        window.removeEventListener("resize", this.handleResize.bind(this))
    }

    handleScroll = e => {
        console.log(
            '浏览器滚动事件',
            // e.srcElement.scrollingElement.scrollTop,
            // e.srcElement.scrollingElement.scrollHeight
        )
        //e.srcElement.scrollingElement.scrollTop为距离滚动条顶部高度
        // e.srcElement.scrollingElement.scrollHeight为整个文档高度
    }

    handleResize = e => {
        console.log('分辨率', window.screen.width, window.screen.height) //分辨率
        console.log('宽高', document.body.clientWidth, document.body.clientHeight) //宽高
        this.setState({
            height: document.body.clientHeight,
            width: document.body.clientWidth,

        })
    }

    render() {
        const { width, height } = this.state
        return (
            <div className="appMain" style={{ "width": width, height: height }}>
                {/* <div className="appMain" > */}
                <header className="appMain-header">
                    this is a demo to learn webpack-react!
                </header>
                <main className="appMain-main">
                    <Test />
                </main>
                <footer className="appMain-footer">this is footer</footer>
            </div>
        )
    }
}

export default App