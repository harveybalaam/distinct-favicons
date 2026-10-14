export type Route =
  | { name: "create" }
  | { name: "edit"; id: string }
  | { name: "list" }
  | { name: "settings" };

export const createNav = () => {
  const stack = $state<Route[]>([{ name: "list" }]);

  return {
    back() {
      if (stack.length > 1) {
        stack.pop();
      }
    },
    get canGoBack(): boolean {
      return stack.length > 1;
    },
    get current(): Route {
      return stack.at(-1) ?? { name: "list" };
    },
    push(route: Route) {
      stack.push(route);
    },
  };
};

export const nav = createNav();
