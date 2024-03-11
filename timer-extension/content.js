// 定义一个回调函数来处理观察到的变动
const callback = function (mutationsList, observer) {
  let test = window.document.querySelector('#InventoryCardSku')
  if (test) {
    console.log('找到异步加载的元素:', test.value);
    test.addEventListener('blur', (e) => {
      console.log(e.target.value)
      if (e.target.value === 'testSku') {
        test.style.border = '3px red solid'
      }
    })
    // 如果不再需要观察器，可以在此处断开连接
    observer.disconnect();
  }
  // for (const mutation of mutationsList) {
  //   if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
  //     mutation.addedNodes.forEach((node) => {
  //       // 检查是否是我们关心的元素，可以通过 class、id 等属性判断
  //       if (node.matches && node.matches('#InventoryCardSku')) {
  //         // 执行你想要的操作
  //         console.log('找到异步加载的元素:', node);
  //         // 如果不再需要观察器，可以在此处断开连接
  //         observer.disconnect();
  //       }
  //     });
  //   }
  // }
};

// 创建 MutationObserver 实例并传入回调函数
const observer = new MutationObserver(callback);

// 配置观察器选项:
// childList 为 true 表示观察子节点的增减变化
const config = { attributes: false, childList: true, subtree: true };

// 选择需要观察变动的节点
const targetNode = document; // 通常是 document.body 或特定容器

// 开始观察目标节点
observer.observe(targetNode, config);