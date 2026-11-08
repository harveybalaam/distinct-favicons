<script module lang="ts">
  import Select from "./Select.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    argTypes: {
      options: {
        description:
          "Array of objects containing the name and corresponding value for each option",
      },
    },
    component: Select,
    tags: ["autodocs"],
    title: "Inputs/Select",
  });
</script>

<Story
  name="Default"
  args={{
    label: "Default",
    name: "Default",
    options: [
      {
        name: "Option One",
        value: "option-1",
      },
      {
        name: "Option Two",
        value: "option-2",
      },
    ],
  }}
/>

<Story
  name="Required"
  args={{
    label: "Required Input",
    name: "Required Input",
    options: [
      {
        name: "Option One",
        value: "option-1",
      },
      {
        name: "Option Two",
        value: "option-2",
      },
    ],
    required: true,
  }}
/>
