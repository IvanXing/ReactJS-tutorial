### React 知识点总结

* 声明式开发（操作完数据然后渲染）
* 可以与其它框架并存 （index.html中的root）
* 组件化
* 单向数据流
* 视图层框架（多层组件数据流单向，叠加复杂，复杂情况下加redux flux等数据流框架）
* 函数式编程（功能解耦，便捷于前端自动化测试）


* propTypes 和 defaultProps 
    * 类型检测和默认值

* props state 与 render 函数
    * 当组件的state或者props发生改变时，render函数就会重新执行
    * 当父组件的render函数被运行时，它的子组件的render都将重新运行一次

* 虚拟DOM
    * 思路1：数据变化 => 新DOM完整替换旧DOM（性能消耗大）
    * 思路2：数据变化 => 新旧DOM对比找出差异替换（对比也消耗性能）
    * 思路3：JSX模板 => 生成虚拟DOM（一个JS对象，用来描述真实DOM，JS创建JS对象的性能损耗和创建真实DOM不是一个级别）=> 虚拟DOM生成最初版真实DOM => 数据变化 => 生成新虚拟DOM（JS创建对象，此步节约了大量性能） => Diff算法对比出两个虚拟DOM的区别（JS对象对比，性能消耗低） => 更新真实DOM
    ```
    // 真实DOM
    <div id='abc'><span>hello world</span></div>
    // 虚拟DOM
    ['div', {id: 'abc'}, ['span', {}, 'hello world']]
    ```
    * JSX => React.createElement => 虚拟DOM（JS对象）=> 真实DOM
    ```
    // JSX
    render() {
        return <div><span>item</span></div>
    }
    // 生成虚拟DOM
    return React.createElement('div', {}, React.createElement('span', {}, 'item'))
    ```
    * React Native：虚拟DOM => 安卓 ios组件

* 虚拟DOM中的Diff算法
    * setState异步合并是为了减少频繁对比更新
    * DOM节点树，自顶向下 同层比对，上层有变化，树下整体更新，依次向下
    * 引入key值是为了提高虚拟DOM比对性能，对比key直接找出不同
    * key最好不是index，diff算法用到了index，无法保证index前后一致，可以用item做key值
    ```
    // 最好使用稳定（变化前后不变）的值为key值
    a 0 b 1 c 2 => 删除a => b 0 c 1（index当key值，同值前后key不同）
    a a b b c c => 删除a => b b c c（item当key，数据变化前后，key相同）
    ```

