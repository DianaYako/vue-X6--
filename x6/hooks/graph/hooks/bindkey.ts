/** 绑定快捷键 */
import { Graph } from "@antv/x6"
import { callback1 } from "../types"

export const bindKey = (graph: Graph, cb: callback1) => {
  if (graph) {
    bindDelete(graph, cb)
  }
}
/**
 * 绑定 delete 按键
 */
const bindDelete = (graph: Graph, cb: callback1) => {
  graph.bindKey('delete', (e: KeyboardEvent) => {
    console.log(graph.getSelectedCells())
    cb({ type: 'delete', isRender: true })
  })
}
/**
 * 绑定tab按键
 */
// const bindTab = (graph: Graph) => {
//   graph.bindKey('tab', (e) => {
//     e.preventDefault()
//     const selectedNodes = graph.getSelectedCells().filter((item) => item.isNode())
//     if (selectedNodes.length) {
//       const node = selectedNodes[0]
//       const type = node.prop('type')
//       if (addChildNode(node.id, type)) {
//         render()
//       }
//     }
//   })
// }
