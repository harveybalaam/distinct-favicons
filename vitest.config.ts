import { defineConfig, mergeConfig } from "vitest/config";
import path from "node:path";
import { playwright } from "@vitest/browser-playwright";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import viteConfig from "./vite.config.ts";

const configDir = path.join(import.meta.dirname, ".storybook");

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      projects: [
        {
          extends: true,
          test: {
            include: ["**/*.test.ts"],
            name: "unit",
          },
        },
        {
          extends: true,
          plugins: [
            storybookTest({
              configDir,
            }),
          ],
          test: {
            browser: {
              enabled: true,
              headless: true,
              instances: [
                {
                  browser: "chromium",
                },
              ],
              provider: playwright({}),
            },
            name: "storybook",
          },
        },
      ],
    },
  }),
);
