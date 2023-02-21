import CustomNode from '../../../components/node/CustomNode.vue';
import BaseNode from '../../../components/node/BaseNode.vue';
import { register } from "@antv/x6-vue-shape";

const isRegister = []

export const registerCustomNode = () => {
  // 自定义节点
  register({
    shape: "custom-vue-node",
    width: 100,
    height: 100,
    component: CustomNode,
    attrs: {
      img: {
        event: 'add:topic'
      }
    }
  });
  // 主节点
  register({
    shape: "BaseNode",
    width: 100,
    height: 100,
    component: BaseNode,
  });
}