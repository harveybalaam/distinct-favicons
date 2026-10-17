<script module lang="ts">
  import { PlusIcon, RocketIcon } from "@lucide/svelte";
  import Button from "./Button.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    argTypes: {
      icon: {
        control: { type: "select" },
        description: "The icon shown inside the button, can be any Lucide icon",
        mapping: {
          None: undefined,
          Plus: PlusIcon,
          Rocket: RocketIcon,
        },
        options: ["None", "Plus", "Rocket"],
      },
    },
    component: Button,
    tags: ["autodocs"],
    title: "Buttons/Button",
  });
</script>

<Story name="Without Icon" args={{ ariaLabel: "Button", text: "Button" }} />

<Story
  name="With Icon"
  args={{ ariaLabel: "Button", icon: RocketIcon, text: "Button" }}
/>
