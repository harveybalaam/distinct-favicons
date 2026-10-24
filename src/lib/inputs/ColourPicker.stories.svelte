<script module lang="ts">
  import ColourPicker from "./ColourPicker.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    component: ColourPicker,
    tags: ["autodocs"],
    title: "Inputs/Colour Picker",
  });
</script>

<Story
  name="Default"
  args={{
    label: "Default",
    name: "Default",
  }}
/>

<Story
  name="Required"
  args={{
    label: "Required Input",
    name: "Required Input",
    required: true,
  }}
/>
