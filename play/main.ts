import { createApp } from "vue";

(async () => {
  // 导入src目录下所有.vue文件
  const apps = import.meta.glob<any>("./src/*.vue");

  // 获取当前地址名称,没有则为App
  let name = location.pathname.replace(/^\//, "") || "App";

  // 获取.vue文件
  const file = apps[`./src/${name}.vue`];

  // 文件不存在,则跳转到App
  if (!file) {
    location.pathname = "App";
    return;
  }

  // 获取组件
  const App = (await file()).default;

  // 将组件作为根组件渲染
  createApp(App).mount("#app");
})();
