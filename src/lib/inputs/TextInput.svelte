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
    name: string;
    placeholder: string;
    required?: boolean;
    type?: TextInputTypeAttribute;
  }

  const {
    hint,
    id,
    label,
    name,
    placeholder,
    required = false,
    type = "text",
  }: TextInputProps = $props();

  const inputId = $derived(getInputId(id, name));
  const hintId = $derived(`${inputId}-hint`);
</script>

<div class="text-input">
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

    font-family: var(--font-family);
  }

  .text-input > label {
    margin-bottom: 0.5rem;
    color: var(--subtext-0);
  }

  .text-input > input {
    padding: 0.5rem;

    background-color: var(--crust);

    border: 1px solid var(--border);
    border-radius: 0.75rem;
  }

  .text-input > p {
    margin: 0.25rem 0 0 0;
    padding-left: 0.5rem;

    font-size: 0.875rem;

    color: var(--subtext-0);
  }

  label {
    display: flex;
    gap: 0.125rem;
  }

  label > span {
    color: var(--red);
  }
</style>
