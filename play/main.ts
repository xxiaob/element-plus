import { createApp } from "vue";

(async () => {
  const apps = import.meta.glob("./src/*.vue");
  let name = location.pathname.replace(/^\//, "") || "App";
  const file = apps[`./src/${name}.vue`];

  if (!file) {
    location.pathname = "App";
    return;
  }

  const App = (await file()).default;

  createApp(App).mount("#app");
})();
