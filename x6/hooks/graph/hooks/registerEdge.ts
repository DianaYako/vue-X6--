import { Graph } from "@antv/x6"

// 边
export const registerEdge = () => {
  Graph.registerEdge(
    'mindmap-edge',
    {
      inherit: 'edge',
      connector: {
        name: 'mindmap',
      },
      attrs: {
        line: {
          targetMarker: '',
          stroke: '#A2B1C3',
          strokeWidth: 2,
        },
        img: {
          event: 'add:topic'
        }
      },
      zIndex: 0,
    },
    true,
  )
}