import { renderCells } from './hooks/operate';
import { callbackOption } from './types/index';
import { registerConnector } from './hooks/registerConnector';
import { registerEdge } from './hooks/registerEdge';
import { option } from './hooks/option';
import { setEvent } from './hooks/event';
import { registerCustomNode } from './hooks/registerNode';
import { Cell, Graph } from '@antv/x6'
import { graphData, getGraphData, HierarchyResult, resolveData } from './hooks/data';
import { bindKey } from './hooks/bindkey';
import { Keyboard } from "@antv/x6-plugin-keyboard";
import { Clipboard } from "@antv/x6-plugin-clipboard";
import { Selection } from "@antv/x6-plugin-selection";
import { Scroller } from "@antv/x6-plugin-scroller";
import { Export } from "@antv/x6-plugin-export";


// g6 graph 实例
export let graph: Graph | null = null

/**
 * 初始化graph
 */
export const initGraph = (dom: HTMLElement) => new Promise<boolean>(resolve => {
  if (!dom) {
    console.error('<initGraph> 没有传入承载元素的dom');
    return
  }


  // 检查是否没等渲染完毕
  if (!dom) {
    setTimeout(() => {
      initGraph(dom)
    }, 300);
  }

  // 初始option
  let graphOption = JSON.parse(JSON.stringify(option))
  const width = dom?.scrollWidth;
  const height = (dom?.scrollHeight || 500) - 20;

  // 对option进行一些动态赋值
  graphOption.container = dom
  graphOption.width = width
  graphOption.height = height

  // 初始化
  graph = new Graph(graphOption);
  /** 挂载相关插件 */
  // 快捷键
  graph.use(new Keyboard({ enabled: true }));
  // 复制粘贴
  graph.use(new Clipboard({ enabled: true }));
  // 框选
  graph.use(new Selection({ enabled: true }));
  // 滚动画布
  graph.use(new Scroller({ 
    graph: graph,
    enabled: true, 
    pannable: true // 是否启用画布平移能力（在空白位置按下鼠标后拖动平移画布）
  }));
  // 导出
  graph.use(new Export());
  /** 挂载相关插件 end */

  // 注册自定义节点
  registerCustomNode()
  // 注册连接器
  registerConnector()
  // 注册边
  registerEdge()
  // 设置事件
  setEvent(graph, (option: callbackOption) => {
    if (option && option.type === 'add:topic') {
      graph && renderCells(graph)
    }
  })
  // 获取渲染的数据
  getGraphData().then(res => {
    if (res) {
      resolve(true)
    } else {
      resolve(false)
    }
  })
  // 绑定快捷键
  bindKey(graph, (option: { type: string, isRender?: boolean }) => {
    if (option && option.isRender) {
      graph && renderCells(graph)
    }
  })

})
/**
 * 清除graph
 */
export const clearGraph = () => {
  graph?.dispose()
  graph = null
}