import { Options } from '@antv/x6/lib/graph/options'

export const option: Partial<Options.Manual> | KeyValue = {
  connecting: {
    connector: 'smooth',
  },
  selecting: {
    enabled: true,
  },
  mousewheel: {
    enabled: true,
    modifiers: ['ctrl', 'meta'],
  },
  keyboard: {
    enabled: true,
  },
  async: true,
  frozen: true
}