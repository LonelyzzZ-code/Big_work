import type { Question } from '@/types'

export const questions: Question[] = [
  // ==================== HTML基础 ====================
  {
    id: 1,
    category: 'HTML基础',
    stem: '以下哪个标签用于定义 HTML 文档的元数据头部区域？',
    options: ['A. <header>', 'B. <head>', 'C. <h1>', 'D. <footer>'],
    correctIndex: 1,
    explanation:
      '<head> 用于包含文档元数据（title、meta、link 等），<header> 是 HTML5 新增的语义化标签，表示页面或区块的头部区域。',
  },
  {
    id: 2,
    category: 'HTML基础',
    stem: 'HTML5 中 <canvas> 标签的主要用途是？',
    options: [
      'A. 播放音频文件',
      'B. 嵌入视频文件',
      'C. 通过脚本绘制图形和动画',
      'D. 显示数据表格',
    ],
    correctIndex: 2,
    explanation:
      '<canvas> 配合 JavaScript 可动态绘制位图图形和动画；<audio> 和 <video> 标签分别负责音频和视频的播放。',
  },
  {
    id: 3,
    category: 'HTML基础',
    stem: '关于 id 和 class 属性的区别，哪个说法正确？',
    options: [
      'A. id 可在多个元素上复用，class 不可复用',
      'B. id 在页面内必须唯一，class 可在多个元素上复用',
      'C. 两者完全等价，没有区别',
      'D. class 必须唯一，id 可复用',
    ],
    correctIndex: 1,
    explanation:
      'id 是元素的唯一标识符，同一页面中同一个 id 值只能出现一次；class 用于对多个元素分组，可以复用在多个元素上。',
  },

  // ==================== CSS与Flex ====================
  {
    id: 4,
    category: 'CSS与Flex',
    stem: '在 Flex 布局中，justify-content: center 的作用是？',
    options: [
      'A. 垂直居中子元素',
      'B. 水平居中子元素',
      'C. 子元素两端对齐',
      'D. 子元素均匀分布（含首尾间距）',
    ],
    correctIndex: 1,
    explanation:
      'justify-content 控制主轴方向上的对齐方式，默认主轴为水平方向，center 表示水平居中。垂直方向居中应使用 align-items: center。',
  },
  {
    id: 5,
    category: 'CSS与Flex',
    stem: '若要将 Flex 容器的主轴方向由水平改为垂直，应使用？',
    options: [
      'A. flex-wrap: column',
      'B. align-items: column',
      'C. flex-direction: column',
      'D. flex-flow: vertical',
    ],
    correctIndex: 2,
    explanation:
      'flex-direction 决定主轴方向：row（水平，默认值）| column（垂直）。flex-wrap 控制换行，flex-flow 是 flex-direction 和 flex-wrap 的简写。',
  },
  {
    id: 6,
    category: 'CSS与Flex',
    stem: 'Flex 子元素要自动占据主轴方向的剩余空间，应设置哪个属性？',
    options: [
      'A. flex-grow: 1',
      'B. flex-shrink: 1',
      'C. flex-basis: 100%',
      'D. align-self: stretch',
    ],
    correctIndex: 0,
    explanation:
      'flex-grow 控制子元素对剩余空间的分配比例，默认值为 0（不扩展）。flex-shrink 控制收缩比例，flex-basis 设置初始基准尺寸。',
  },

  // ==================== TypeScript ====================
  {
    id: 7,
    category: 'TypeScript',
    stem: '在 TypeScript 中，interface 与 type 的区别，正确的是？',
    options: [
      'A. 两者完全等同，没有任何区别',
      'B. type 可以声明联合类型，interface 不可以',
      'C. interface 可以定义函数类型，type 不可以',
      'D. type 可以被 extends 继承扩展',
    ],
    correctIndex: 1,
    explanation:
      'type 支持联合类型（A | B）、交叉类型、元组等；interface 专为对象形状设计，可通过 extends 扩展，同名 interface 会自动合并。',
  },
  {
    id: 8,
    category: 'TypeScript',
    stem: 'readonly 修饰符在 TypeScript 中的作用是？',
    options: [
      'A. 使属性在运行时不可被读取',
      'B. 使属性在初始化后不可被重新赋值',
      'C. 使属性自动变为私有属性',
      'D. 使属性仅子类可见',
    ],
    correctIndex: 1,
    explanation:
      'readonly 在编译时约束属性：对象创建后该属性不可重新赋值。注意这只在 TypeScript 编译检查阶段生效，运行时并没有真正的不可修改机制。',
  },
  {
    id: 9,
    category: 'TypeScript',
    stem: '关于 TypeScript 泛型（Generics），说法正确的是？',
    options: [
      'A. 泛型只能用于函数，不能用于类和接口',
      'B. 泛型在运行时进行类型检查',
      'C. 泛型在编译时捕获类型错误，提高代码复用性',
      'D. 泛型必须显式指定类型参数，不能自动推断',
    ],
    correctIndex: 2,
    explanation:
      '泛型可作用于函数、接口、类；TypeScript 能根据传入参数自动推断类型参数；编译后类型信息被擦除，运行时不会进行泛型检查。',
  },

  // ==================== Vue3 ====================
  {
    id: 10,
    category: 'Vue3',
    stem: '在 Vue3 Composition API 中，computed 的主要用途是？',
    options: [
      'A. 创建一个响应式的 ref 变量',
      'B. 监听某个值的变化并执行副作用回调',
      'C. 基于响应式数据生成一个会自动更新的派生值',
      'D. 在组件挂载后执行一段逻辑',
    ],
    correctIndex: 2,
    explanation:
      'computed 接收一个 getter 函数，返回一个只读的 ref 对象。它会自动追踪依赖，只有依赖变化时才重新求值，且具有缓存机制。watch 才是用于监听变化并执行副作用。',
  },
  {
    id: 11,
    category: 'Vue3',
    stem: 'Vue3 中父子组件通信时，props 的数据流向是？',
    options: [
      'A. 子组件 → 父组件',
      'B. 父组件 → 子组件',
      'C. 双向绑定，任意方向均可',
      'D. 兄弟组件之间',
    ],
    correctIndex: 1,
    explanation:
      'props 遵循单向数据流，数据只能从父组件流向子组件。如果子组件需要通知父组件更新数据，应使用 emit 触发事件，由父组件处理后再通过 props 传回。',
  },
  {
    id: 12,
    category: 'Vue3',
    stem: 'Vue3 中 ref 与 reactive 的主要区别是？',
    options: [
      'A. ref 可包装基本类型和对象，reactive 只能包装对象',
      'B. ref 只能包装对象，reactive 可包装基本类型',
      'C. 两者完全相同，只是语法糖',
      'D. ref 只能用于模板，reactive 只能用于 script',
    ],
    correctIndex: 0,
    explanation:
      'ref 通过 .value 包装任意类型（包括 string、number 等基本类型）；reactive 基于 Proxy 实现，只能代理对象类型（Object、Array 等）。',
  },
]
