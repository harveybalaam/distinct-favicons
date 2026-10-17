<script module lang="ts">
  import Switch from "./Switch.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    component: Switch,
    tags: ["autodocs"],
    title: "Inputs/Switch",
  });
</script>

<Story name="Default" args={{ ariaLabel: "Example", name: "Example" }} />
