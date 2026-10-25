<script lang="ts">
  import { getInputId } from "../../utils/get-input-id";

  interface SwitchProps {
    ariaLabel?: string;
    defaultChecked?: boolean;
    id?: string;
    label?: string;
    name: string;
  }

  const {
    ariaLabel,
    defaultChecked = false,
    id,
    label,
    name,
  }: SwitchProps = $props();

  const inputId = $derived(getInputId(id, name));

  // svelte-ignore state_referenced_locally
  let isChecked = $state(defaultChecked);

  const handleOnChange = ({
    currentTarget,
  }: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
    isChecked = currentTarget.checked;
  };
</script>

{#if label}
  <div class="switch-label-container">
    <label for={inputId}>
      {label}
      <div>
        <span class="switch-status">{isChecked ? "On" : "Off"}</span>
        <div class="switch">
          <input
            aria-label={ariaLabel}
            {defaultChecked}
            id={inputId}
            {name}
            onchange={handleOnChange}
            role="switch"
            type="checkbox"
          />
          <span class="slider"></span>
        </div>
      </div>
    </label>
  </div>
{:else}
  <label class="switch">
    <input aria-label={ariaLabel} {name} role="switch" type="checkbox" />
    <span class="slider"></span>
  </label>
{/if}

<style>
  .switch-label-container {
    display: flex;
    flex-direction: column;
  }

  div:has(> .switch) {
    display: flex;
    align-items: center;
    gap: 0.375rem;

    padding: 0.375rem;

    background-color: var(--mantle);

    border: 1px solid var(--border);
    border-radius: 0.75rem;

    color: var(--subtext-1);

    font-size: 0.875rem;
  }

  .switch-label-container > label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    color: var(--subtext-1);

    font-size: 0.875rem;
    font-weight: 700;

    cursor: pointer;
  }

  .switch-label-container > label span {
    font-weight: normal;
  }

  .switch-status {
    width: 2.375ch;
  }

  .switch {
    position: relative;
    display: inline-block;

    height: 1.25rem;
    width: 2.25rem;
  }

  .switch > input {
    position: absolute;

    height: 1px;
    width: 1px;

    padding: 0;
    margin: -1px;

    border-width: 0;

    overflow: hidden;
    white-space: nowrap;
    clip: rect(0, 0, 0, 0);
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: var(--overlay-0);

    border-radius: 1rem;

    cursor: pointer;

    transition: 250ms ease-in-out;
  }

  .slider::before {
    content: "";

    position: absolute;
    left: 0.125rem;
    bottom: 0.125rem;

    height: 1rem;
    width: 1.25rem;

    background-color: var(--bg);

    border-radius: 1rem;

    transition: 250ms ease-in-out;
  }

  input:checked + .slider {
    background-color: var(--sky);
  }

  input:focus-visible + .slider {
    outline: 2px solid var(--sky);
    outline-offset: 1px;

    transition-property: background-color, border, border-radius;
  }

  input:checked + .slider:before {
    transform: translateX(0.75rem);
  }
</style>
