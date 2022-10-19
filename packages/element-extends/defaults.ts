// 导入注册方法
import { makeInstaller } from "./make-installer";

// 导入所有的组件与插件
import Components from "./components";
import Plugins from "./plugins";

export default makeInstaller([...Components, ...Plugins]);
