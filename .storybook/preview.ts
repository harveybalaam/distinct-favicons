import "../src/app.css";
import type { Preview } from "@storybook/svelte-vite";
import dsfTheme from "./theme";

const preview: Preview = {
  parameters: {
    a11y: {
      test: "todo",
    },
    controls: {
      matchers: {
        color: /(?<colour>background|color)$/u,
        date: /Date$/u,
      },
    },
    docs: {
      theme: dsfTheme,
    },
  },
};

export default preview;
