### React特点

* 声明式开发（操作完数据然后渲染）
* 可以与其它框架并存 （index.html中的root）
* 组件化
* 单向数据流
* 视图层框架（多层组件数据流单向，叠加复杂，复杂情况下加redux flux等数据流框架）
* 函数式编程（功能解耦，便捷于前端自动化测试）

### 0. 知识点
* JSX语法中，自定义组件必须大写开头，元素开头是小写
* const component = React.component;
* Fragment占位符，大写 算组件，代替return最外层多的div  version 16+
* dangerouslySetInnerHTML. 不自动转义 js对象
* react中的label聚焦，不能用for，用htmlFor
* 组建的拆分 参数以及方法的传递  属性  父->子方法  调用 传回 还是在父组件里修改
* setState 参数prevState
* 单向数据流：父组件可以传递给子组件值，但是子组件不能修改这个值，修改不能同步数据

### 1. propTypes 和 defaultProps 

* 类型检测和默认值

### 2. props state 与 render 函数

* 当组件的state或者props发生改变时，render函数就会重新执行
* 当父组件的render函数被运行时，它的子组件的render都将重新运行一次

### 3. 虚拟DOM
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

### 4. 虚拟DOM中的Diff算法
* setState异步合并是为了减少频繁对比更新
* DOM节点树，自顶向下 同层比对，上层有变化，树下整体更新，依次向下
* 引入key值是为了提高虚拟DOM比对性能，对比key直接找出不同
* key最好不是index，diff算法用到了index，无法保证index前后一致，可以用item做key值
```
    // 最好使用稳定（变化前后不变）的值为key值
    a 0 b 1 c 2 => 删除a => b 0 c 1（index当key值，同值前后key不同）
    a a b b c c => 删除a => b b c c（item当key，数据变化前后，key相同）
```

### 5. ref的使用（尽量不要操作dom）

```
    ref={(inputDom) => {this.inputDom = inputDom}}
    console.log(this.ul.querySelectorAll('div').lenght)
```

### 6. 生命周期函数

* 生命周期函数指在某一个时刻组件会自动调用执行的函数

* 初始化 Initialization 
    * setup props and state
* 挂载（第一次渲染） Mounting
    * componentWillMount（在组件即将被挂载到页面的时刻自动执行）
    * render（组件挂载）
    * componentDidMount（组件挂载完成执行）
    * update render -> update render ... 数据更新渲染
* 更新 Updation
    * componentWillReceiveProps（props更新有（子组件接收props，更新操作时自动调用，第一次渲染子组件不执行），states更新没有此函数）
    * shouldCompontentUpdate（返回布尔值 从而决定是否下一步）
    * componentWillUpdate
    * render
    * componentDidUpdate
* 卸载 Unmounting
    * componentWillUnmount（组件从页面中剔除时被执行）
    
    * 父组件render时，子组件也会render
    * render必须存在，不内置在component中
    * ajax最好放在componentDidMount中，render中会死循环，componentWillMount会和rn，同构有冲突，constructor中理论上也可

### 7. React中的CSS

* 使用CSS3
* 使用react-transition-group实现复杂动画
    * https://github.com/reactjs/react-transition-group