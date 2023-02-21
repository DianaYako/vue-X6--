import { Graph } from '@antv/x6';
import { addChildNode } from './operate';
import { callback1 } from '../types';

/**
 * 设置监听事件
 */
export const setEvent = (graph: Graph, cb: callback1) => {
  modelReseted(graph, cb)
}
/**
 * 模型加载完成
 */
const modelReseted = (graph: Graph, cb: callback1) => {
  graph.on('model:reseted', () => {
    cb({ type: 'model:reseted' })
  })
}