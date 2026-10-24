<script lang="ts">
  import { CheckIcon, ChevronDownIcon } from "@lucide/svelte";
  import { getInputId } from "../../utils/get-input-id";

  export interface SelectOption {
    name: string;
    value: string;
  }

  interface SelectProps {
    id?: string;
    label: string;
    name: string;
    options: SelectOption[];
    required?: boolean;
  }

  const { id, label, name, options, required = false }: SelectProps = $props();

  const selectId = $derived(getInputId(id, name));
</script>

<div class="select-input">
  <label for={selectId}>
    {label}
    {#if required}
      <span>*</span>
    {/if}
  </label>
  <select id={selectId} {name}>
    <button>
      <selectedcontent></selectedcontent>
      <ChevronDownIcon class="picker-icon" size={16} />
    </button>
    {#each options as selectOption}
      <option value={selectOption.value}>
        <CheckIcon class="select-checkmark" size={16} />
        {selectOption.name}
      </option>
    {/each}
  </select>
</div>

<style>
  .select-input {
    display: flex;
    flex-direction: column;

    font-family: var(--font-family);
  }

  select {
    display: flex;
    justify-content: space-between;

    color: var(--text);
    padding: 0.5rem;

    line-height: 1rem;

    background-color: var(--mantle);

    border: 1px solid var(--border);
    border-radius: 0.75rem;

    cursor: pointer;
  }

  label {
    display: flex;
    gap: 0.125rem;

    margin-bottom: 0.5rem;

    color: var(--subtext-1);

    font-size: 0.875rem;
    font-weight: 700;
  }

  label > span {
    color: var(--red);
  }

  @supports (appearance: base-select) {
    select,
    ::picker(select) {
      /* Note: not Baseline - still not available in Firefox  */
      appearance: base-select;
      font-size: 0.875rem;
    }

    ::picker(select) {
      padding: 0.5rem;
      max-height: 8rem;
      scrollbar-width: none;
    }

    select::picker-icon,
    option::checkmark,
    selectedcontent :global(.select-checkmark) {
      display: none;
    }

    select > button :global(.picker-icon) {
      transition: 500ms rotate;
    }

    select:open > button :global(.picker-icon) {
      rotate: 180deg;
    }

    ::picker(select) {
      color: var(--text);
      background-color: var(--mantle);

      border: 1px solid var(--border);
      border-radius: 0.75rem;

      top: calc(anchor(bottom) + 0.25rem);
    }

    option {
      padding: 0.125rem 0.5rem 0.125rem 0.5rem;
      border-radius: 0.5rem;
    }

    option:hover {
      background-color: var(--surface-0);
    }

    option:checked {
      font-weight: 600;
    }

    option:not(:checked) :global(.select-checkmark) {
      visibility: hidden;
    }
  }
</style>
