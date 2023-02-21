import { Graph, Path } from '@antv/x6';

// 连接器
export const registerConnector = () => {
  Graph.registerConnector(
    'mindmap',
    (sourcePoint, targetPoint, routerPoints, options) => {
      const midX = sourcePoint.x + 10
      const midY = sourcePoint.y
      const ctrX = (targetPoint.x - midX) / 5 + midX
      const ctrY = targetPoint.y
      const pathData = `
        M ${sourcePoint.x} ${sourcePoint.y}
        L ${midX} ${midY}
        Q ${ctrX} ${ctrY} ${targetPoint.x} ${targetPoint.y}
      `
      return options.raw ? Path.parse(pathData) : pathData
    },
    true,
  )
}