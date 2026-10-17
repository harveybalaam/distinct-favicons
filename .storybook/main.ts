import type { StorybookConfig } from "@storybook/svelte-vite";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-svelte-csf",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/svelte-vite",
  staticDirs: ["./public"],
  stories: ["../src/**/*.stories.@(js|ts|svelte)"],
};

export default config;
