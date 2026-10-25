<script lang="ts">
  import type { HTMLInputTypeAttribute } from "svelte/elements";
  import type { InputProps } from "../../types/input-props";
  import { toKebabCase } from "../../utils/to-kebab-case";

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

  interface TextInputProps extends InputProps {
    hint?: string;
    monospace?: boolean;
    placeholder: string;
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

  const inputId = $derived(id ?? toKebabCase(name));
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
    display: flex;
    flex-direction: column;

    color: var(--subtext-1);

    font-family: var(--font-family);
  }

  .text-input > input {
    padding: 0.5rem;

    line-height: 1rem;
    font-family: var(--font-family);

    background-color: var(--mantle);

    border: 1px solid var(--border);
    border-radius: 0.75rem;
  }

  .text-input.text-input-mono > input {
    font-family: monospace;
    font-size: 0.875rem;
  }

  .text-input > p {
    margin: 0.25rem 0 0 0;
    padding-left: 0.625rem;

    color: var(--overlay-1);

    font-size: 0.875rem;
    font-style: italic;
  }

  label {
    display: flex;
    gap: 0.125rem;

    margin-bottom: 0.5rem;

    font-size: 0.875rem;
    font-weight: 700;
  }

  label > span {
    color: var(--red);
  }
</style>
