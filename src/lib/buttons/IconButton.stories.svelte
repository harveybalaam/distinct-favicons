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
      onClick: {
        control: false,
        description: "What to run when the button is clicked",
      },
      size: {
        control: { type: "select" },
        description: "The size of the button, in t-shirt sizes",
        options: ["sm", "md"],
      },
      variant: {
        control: { type: "select" },
        options: ["primary", "destructive"],
      },
    },
    component: IconButton,
    tags: ["autodocs"],
    title: "Buttons/IconButton",
  });
</script>

<Story
  name="Primary"
  args={{ ariaLabel: "IconButton", icon: SettingsIcon, variant: "primary" }}
/>

<Story
  name="Destructive"
  args={{ ariaLabel: "IconButton", icon: TrashIcon, variant: "destructive" }}
/>

<Story
  name="Ghost"
  args={{ ariaLabel: "IconButton", icon: ListIcon, variant: "ghost" }}
/>

<Story name="Medium" args={{ ariaLabel: "IconButton", icon: SettingsIcon }} />

<Story
  name="Small"
  args={{ ariaLabel: "IconButton", icon: SettingsIcon, size: "sm" }}
/>
