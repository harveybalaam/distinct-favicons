<script lang="ts">
  import type { InputProps } from "../../types/input-props";
  import { getInputId } from "../../utils/get-input-id";

  const { id, label, name, required }: InputProps = $props();

  const inputId = $derived(getInputId(id, name));

  // Blue (from dark scheme)
  const defaultColour = "#8aadf4";
  let currentColour = $state(defaultColour);
</script>

<div class="colour-picker">
  <label for={inputId}>
    {label}
    {#if required}
      <span>*</span>
    {/if}
  </label>
  <div>
    <input
      defaultValue={defaultColour}
      onchange={({ currentTarget }) => {
        currentColour = currentTarget.value;
      }}
      type="color"
      {required}
    />
    <span>{currentColour}</span>
  </div>
</div>

<style>
  .colour-picker {
    display: flex;
    flex-direction: column;

    color: var(--subtext-1);

    font-size: 0.875rem;
    font-family: var(--font-family);
  }

  .colour-picker > div {
    display: flex;
    align-items: center;
    gap: 0.375rem;

    padding: 0 0.375rem 0 0.375rem;

    background-color: var(--mantle);

    border-radius: 0.75rem;
    border: 1px solid var(--border);

    line-height: 1rem;
  }

  .colour-picker > div > span {
    padding: 0.5rem 0 0.5rem 0;

    font-family: monospace;

    cursor: default;
  }

  input {
    width: 1.25rem;
    height: 1.25rem;

    border-radius: 0.375rem;

    padding: 0;
    border: none;

    cursor: pointer;
  }

  /* Currently targeting Chrome only */
  input::-webkit-color-swatch-wrapper {
    outline: none;
    padding: 0;
  }

  input::-webkit-color-swatch {
    outline: none;
    border: none;
  }

  label {
    display: flex;
    gap: 0.125rem;

    margin-bottom: 0.5rem;

    font-weight: 700;
  }

  label > span {
    color: var(--red);
  }
</style>
