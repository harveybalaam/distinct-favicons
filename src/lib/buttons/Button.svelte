<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import type { LucideIcon } from "@lucide/svelte";

  interface ButtonProps {
    ariaLabel?: string;
    icon?: LucideIcon;
    onClick: () => void;
    text: string;
    type?: HTMLButtonAttributes["type"];
  }

  const {
    ariaLabel,
    icon: Icon,
    onClick,
    text,
    type = "button",
  }: ButtonProps = $props();
</script>

<button aria-label={ariaLabel} class:has-icon={!!Icon} onclick={onClick} {type}>
  {#if Icon}
    <Icon size={16} />
  {/if}
  <span>
    {text}
  </span>
</button>

<style>
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    height: 1.75rem;

    padding: 0 0.5rem 0 0.5rem;

    background-color: oklch(from var(--text) l c h / 10%);
    color: var(--text);

    border: 1px solid var(--border);
    border-radius: 1rem;

    cursor: pointer;

    transition-property: all;
    transition: 200ms;
  }

  button:focus-visible {
    transition-property: background-color, border, border-radius;
  }

  button:hover {
    background-color: oklch(from var(--sky) l c h / 20%);
    color: var(--sky);

    border-radius: 0.65rem;
    border-color: var(--sky);
  }

  button.has-icon > span {
    padding-right: 2px;
  }
</style>
