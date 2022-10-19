export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E
) => {
  (main as any).install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };
};
