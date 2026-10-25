<script lang="ts">
  import Select, { type SelectOption } from "./inputs/Select.svelte";
  import Button from "./buttons/Button.svelte";
  import ColourPicker from "./inputs/ColourPicker.svelte";
  import { SaveIcon } from "@lucide/svelte";
  import Switch from "./inputs/Switch.svelte";
  import TextInput from "./inputs/TextInput.svelte";
  import TitleBar from "./TitleBar.svelte";
  import { nav } from "../utils/nav.svelte";

  const alterationTypes: SelectOption[] = [
    {
      name: "Colour Fill",
      value: "colour-fill",
    },
    {
      name: "Colour Overlay",
      value: "colour-overlay",
    },
  ] as const;

  const handleOnSubmit = (
    event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement },
  ) => {
    event.preventDefault();
  };
</script>

<div class="create-rule">
  <TitleBar title="Create Rule" useBackButton />
  <span class="form-hint">Fields marked with <span>*</span> are required</span>
  <form action="" name="create-rule" onsubmit={handleOnSubmit}>
    <div class="form-body">
      <div>
        <TextInput label="Name" name="name" placeholder="New rule" required />
        <Switch defaultChecked label="Status" name="enabled" />
      </div>
      <TextInput
        hint="The regex pattern to match URLs against"
        label="Pattern"
        monospace
        name="pattern"
        placeholder="Regular expression"
        required
      />
      <div class="alteration-type">
        <Select
          label="Alteration Type"
          name="alteration-type"
          options={alterationTypes}
        />
        <ColourPicker label="Colour" name="colour" />
      </div>
    </div>
    <div class="form-footer">
      <Button onClick={() => nav.back()} text="Cancel" variant="ghost" />
      <Button icon={SaveIcon} text="Save" type="submit" variant="action" />
    </div>
  </form>
</div>

<style>
  .create-rule {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.75rem;

    padding: 1rem;
  }

  .create-rule > form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }

  .form-hint {
    color: var(--overlay-1);

    font-style: italic;
    font-size: 0.875rem;
  }

  .form-hint > span {
    color: var(--red);
    font-weight: 700;
  }

  .form-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-footer {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }

  .form-body > div:first-child {
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
  }

  .alteration-type {
    display: flex;
    gap: 0.5rem;
  }

  .form-body > div:first-child > :global(:first-child),
  .alteration-type > :global(:first-child) {
    flex: 1;
  }
</style>
