<script module lang="ts">
  import {
    ListIcon,
    SettingsIcon,
    SquarePenIcon,
    TrashIcon,
  } from "@lucide/svelte";
  import IconButton from "./IconButton.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    argTypes: {
      icon: {
        control: { type: "select" },
        description: "The icon shown inside the button, can be any Lucide icon",
        mapping: {
          List: ListIcon,
          Settings: SettingsIcon,
          SquarePen: SquarePenIcon,
          Trash: TrashIcon,
        },
        options: ["List", "Settings", "SquarePen", "Trash"],
      },
      size: {
        control: { type: "select" },
        description: "The size of the button, in t-shirt sizes",
        options: ["sm", "md"],
      },
    },
    component: IconButton,
    tags: ["autodocs"],
    title: "Buttons/IconButton",
  });
</script>

<Story name="Medium" args={{ icon: SettingsIcon }} />

<Story name="Small" args={{ icon: SettingsIcon, size: "sm" }} />
