/** 操作 */

import { Cell, Graph } from "@antv/x6"
import { HierarchyResult, MindMapData, graphData, resolveData } from "./data"

/**
 * 渲染节点及线
 */
export const renderCells = (graph: Graph) => {
  const cells: Cell[] = []
  
  const traverse = (hierarchyItem: HierarchyResult) => {
    if (hierarchyItem) {
      const { data: hierarchyItemData, children } = hierarchyItem
      // 确定不隐藏 
      if (!hierarchyItemData.hide) {
        cells.push(
          graph!.createNode({
            id: hierarchyItemData.id,
            shape: hierarchyItemData.shape,
            x: hierarchyItem.x,
            y: hierarchyItem.y,
            width: hierarchyItemData.width,
            height: hierarchyItemData.height,
            data: hierarchyItemData
          })
        )
      }
      if (children) {
        children.forEach((item: HierarchyResult) => {
          const { id, data } = item
          // 确定不隐藏
          if (!hierarchyItemData.hide) {
            cells.push(
              graph!.createEdge({
                shape: 'mindmap-edge',
                source: {
                  cell: hierarchyItem.id,
                  anchor:data.shape === 'topic-child'
                    ? { name: 'right', args: { dx: -16 } }
                    : { name: 'center', args: { dx: '25%' } }
                },
                target: {
                  cell: id,
                  anchor: { name: 'left' }
                },
              }),
            )
          }
          traverse(item)
        })
      }
    }
  }
  traverse(resolveData(graphData))
  // 重置元素 重新渲染
  graph?.resetCells(cells, { silent: false })
  // 移动到中心点
  graph?.centerContent()
}
/**
 * 查找节点
 */
export const findItem = (obj: MindMapData, id: string ): { parent: MindMapData | null, node: MindMapData | null } | null => {
  if (obj.id === id) {
    return {
      parent: null,
      node: obj,
    }
  }
  const { children } = obj
  if (children) {
    for (let i = 0, len = children.length; i < len; i++) {
      const res = findItem(children[i], id)
      if (res) {
        return {
          parent: res.parent || obj,
          node: res.node,
        }
      }
    }
  }
  return null
}
/**
 * 添加子节点
 * @param id 父节点id
 * @param type 子节点类型
 */
export const addChildNode = (id: string, type: string) => {
  const res = findItem(graphData, id)
  const dataItem = res?.node
  if (dataItem) {
    let item: MindMapData | null = null
    const length = dataItem.children ? dataItem.children.length : 0
    item = {
      id: `${id}-${length + 1}`,
      shape: 'topic-branch',
      label: `分支主题${length + 1}`,
      width: 100,
      height: 40,
    }
    if (item) {
      if (dataItem.children) {
        dataItem.children.push(item)
      } else {
        dataItem.children = [item]
      }
      return item
    }
  }
  return null
}

/**
 * 删除节点
 * @param id 节点id
 */
export const removeNode = (id: string) => {
  const res = findItem(graphData, id)
  const dataItem = res?.parent
  if (dataItem && dataItem.children) {
    const { children } = dataItem
    const index = children.findIndex((item) => item.id === id)
    return children.splice(index, 1)
  }
  return null
}