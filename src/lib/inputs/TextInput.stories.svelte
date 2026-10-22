<script module lang="ts">
  import TextInput from "./TextInput.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";

  const { Story } = defineMeta({
    argTypes: {
      hint: {
        description:
          "A short instruction explaining the input and/or its purpose",
      },
      type: {
        control: {
          type: "select",
        },
      },
    },
    component: TextInput,
    tags: ["autodocs"],
    title: "Inputs/TextInput",
  });
</script>

<Story
  name="Default"
  args={{
    label: "Default",
    name: "Default",
    placeholder: "Example placeholder",
  }}
/>

<Story
  name="With Hint"
  args={{
    hint: "A short instruction explaining the input and/or its purpose",
    label: "With Hint",
    name: "With Hint",
    placeholder: "Example placeholder",
  }}
/>

<Story
  name="Required"
  args={{
    label: "Required Input",
    name: "Required Input",
    placeholder: "Example placeholder",
    required: true,
  }}
/>

<Story
  name="Monospace"
  args={{
    label: "Monospace Input",
    name: "Monospace Input",
    placeholder: "Example placeholder",
    monospace: true,
  }}
/>
