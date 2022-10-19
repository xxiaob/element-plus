import type { App, Plugin } from "vue";
import { INSTALLED_KEY } from "../constants";
import { version } from "./version";

// 导出注册方法
export const makeInstaller = (component: Plugin[] = []) => {
  const install = (app: App, options?: any) => {
    // 如果已经注册过插件, 则返回
    if (app[INSTALLED_KEY]) return;

    // 未注册过
    app[INSTALLED_KEY] = true;

    // 遍历注册全局组件
    component.forEach((c) => app.use(c));

    // 如果有配置参数
    // if(options) provideGlobalConfig(options,app, true)
  };

  return {
    version, // 版本
    install, // 注册
  };
};
