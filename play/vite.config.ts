import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 执行vite.init.ts
import "./vite.init.ts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
});
