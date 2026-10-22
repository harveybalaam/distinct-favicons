<script lang="ts">
  import type { HTMLInputTypeAttribute } from "svelte/elements";
  import { getInputId } from "../../utils/get-input-id";

  type TextInputTypeAttribute = Extract<
    HTMLInputTypeAttribute,
    | "email"
    | "month"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "url"
    | "week"
  >;

  interface TextInputProps {
    hint?: string;
    id?: string;
    label: string;
    monospace?: boolean;
    name: string;
    placeholder: string;
    required?: boolean;
    type?: TextInputTypeAttribute;
  }

  const {
    hint,
    id,
    label,
    monospace = false,
    name,
    placeholder,
    required = false,
    type = "text",
  }: TextInputProps = $props();

  const inputId = $derived(getInputId(id, name));
  const hintId = $derived(`${inputId}-hint`);
</script>

<div class="text-input" class:text-input-mono={monospace}>
  <label for={inputId}>
    {label}
    {#if required}
      <span>*</span>
    {/if}
  </label>
  <input
    aria-describedby={hint && hintId}
    id={inputId}
    {placeholder}
    {required}
    {type}
  />
  {#if hint}
    <p id={hintId}>{hint}</p>
  {/if}
</div>

<style>
  .text-input {
    color: var(--subtext-1);
    display: flex;
    flex-direction: column;

    font-family: var(--font-family);
  }

  .text-input > label {
    margin-bottom: 0.5rem;
  }

  .text-input > input {
    padding: 0.5rem;

    line-height: 1rem;

    background-color: var(--mantle);

    border: 1px solid var(--border);
    border-radius: 0.75rem;
  }

  .text-input.text-input-mono > input {
    font-family: monospace;
    font-size: 100% !important;
  }

  .text-input > p {
    margin: 0.25rem 0 0 0;
    padding-left: 0.625rem;

    font-size: 0.875rem;
  }

  label {
    display: flex;
    gap: 0.125rem;
    font-size: 0.875rem;
    font-weight: 700;
  }

  label > span {
    color: var(--red);
  }
</style>
