import request from '@/global/utils/request'
import Hierarchy from '@antv/hierarchy'

export let graphData: MindMapData

/**
 * 获取图数据
 */
export const getGraphData = () => new Promise<boolean>(resolve => {
  graphData = {
    id: '1',
    shape: 'BaseNode',
    label: '中心主题',
    width: 100,
    height: 100,
    children: [
      {
        id: '1-1',
        shape: 'BaseNode',
        label: '分支主题1',
        width: 100,
        height: 100,
        children: [
          {
            id: '1-1-1',
            shape: 'BaseNode',
            label: '子主题1',
            width: 100,
            height: 100,
          },
          {
            id: '1-1-2',
            shape: 'BaseNode',
            label: '子主题2',
            width: 100,
            height: 100,
          },
        ],
      },
      {
        id: '1-2',
        shape: 'BaseNode',
        label: '分支主题2',
        width: 100,
        height: 100,
      },
    ]
  }
  resolve(true)
})

export interface MindMapData {
  id: string
  shape: string
  label: string
  width: number
  height: number
  hide?: boolean
  children?: MindMapData[]
}

export interface HierarchyResult {
  id: string
  x: number
  y: number
  data: MindMapData
  children?: HierarchyResult[]
}

/**
 * 解析数据
 */
// 用作解析文字宽度的dom
const resolveDom = document.createElement('div')
resolveDom.classList.add('resolve-dom')
resolveDom.classList.add('base-node-text')
document.body.appendChild(resolveDom); 
// 解析方法
export const resolveData = (data: MindMapData) => {
  const result: HierarchyResult = Hierarchy.mindmap(data, {
    direction: 'H',
    getHeight(d: MindMapData) {
      d.height = 60
      return d.height
    },
    getWidth(d: MindMapData) {
      // 更换dom内容
      resolveDom.innerText = d.label
      d.width = resolveDom.offsetWidth + 30
      return d.width
    },
    getHGap() {
      return 40
    },
    getVGap() {
      return 20
    },
    getSide: () => {
      return 'right'
    },
  })
  return result
}