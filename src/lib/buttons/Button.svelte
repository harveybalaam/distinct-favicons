<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import type { LucideIcon } from "@lucide/svelte";

  type ButtonVariant = "action" | "ghost" | "primary";

  interface ButtonProps {
    ariaLabel?: string;
    icon?: LucideIcon;
    onClick: () => void;
    text: string;
    type?: HTMLButtonAttributes["type"];
    variant?: ButtonVariant;
  }

  const {
    ariaLabel,
    icon: Icon,
    onClick,
    text,
    type = "button",
    variant = "primary",
  }: ButtonProps = $props();
</script>

<button
  aria-label={ariaLabel}
  class={`btn-${variant}`}
  class:has-icon={!!Icon}
  onclick={onClick}
  {type}
>
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
    width: fit-content;

    padding: 0 0.5rem 0 0.5rem;

    font-family: var(--font-family);

    background-color: var(--mantle);
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
    background-color: oklch(from var(--sky) l c h / 10%);
    color: var(--sky);

    font-weight: 600;

    border-radius: 0.65rem;
    border-color: var(--sky);
  }

  button.btn-ghost {
    background: none;
    border: 1px solid transparent;
    border-radius: 0.65rem;
  }

  button.btn-ghost:hover {
    background-color: var(--mantle);
    border-color: var(--border);
    color: var(--text);
  }

  button.btn-action {
    color: var(--crust);
    background-color: var(--sky);
    border: 1px solid var(--sky);
  }

  button.btn-action:hover {
    @media (prefers-color-scheme: light) {
      background-color: hsl(from var(--sky) h s 40%);
      border-color: hsl(from var(--sky) h s 40%);
    }

    @media (prefers-color-scheme: dark) {
      background-color: hsl(from var(--sky) h s 80%);
      border-color: hsl(from var(--sky) h s 80%);
    }
  }

  button.has-icon > span {
    padding-right: 2px;
  }
</style>
