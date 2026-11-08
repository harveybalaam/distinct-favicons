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

  // At least one non-whitespace character
  const requiredPattern = String.raw`.*\S+.*`;
</script>

<div class="text-input" class:text-input-mono={monospace}>
  <label for={inputId}>
    {label}
    {#if required}
      <span class="required">*</span>
    {/if}
  </label>
  <input
    aria-describedby={hint && hintId}
    class="base-input"
    id={inputId}
    {name}
    pattern={required ? requiredPattern : null}
    {placeholder}
    {required}
    title={required ? "At least one non-whitespace character" : null}
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
  }

  .text-input > input {
    padding: 0.5rem;
    font-size: 0.875rem;
    line-height: 1rem;
  }

  .text-input > input:user-invalid {
    outline: 2px solid var(--red);
  }

  .text-input.text-input-mono > input {
    font-family: monospace;
    font-size: 0.875rem;
  }

  .text-input > p {
    margin: 0.25rem 0 0 0;
    padding-left: 0.625rem;

    color: var(--overlay-1);

    font-family: var(--font-family);
    font-size: 0.875rem;
    font-style: italic;
  }
</style>
