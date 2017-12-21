//将一维数组转化为含有层级关系得多维数组
//nodes一维数组，id每一个item的id，parentId每一个item对应的parentId
export default function (nodes, id, parentId) {
  const map = {};
  const root = [];
  // var nodes= nodes.concat([]);
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const nodeId = node[id];
    map[nodeId] = i;
  }
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const nodeParent = node[parentId];
    const parentIndex = map[nodeParent];
    if (parentIndex != 0 && !parentIndex) {
      root.push(node);
    } else {
      nodes[parentIndex].children = nodes[parentIndex].children || [];
      nodes[parentIndex].children.push(node);
    }
  }
  return root;
}
