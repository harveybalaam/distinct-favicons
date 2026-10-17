<script lang="ts">
  import type { LucideIcon } from "@lucide/svelte";

  type IconButtonSizes = "sm" | "md";

  interface IconButtonProps {
    ariaLabel?: string;
    icon: LucideIcon;
    onClick: () => void;
    size?: IconButtonSizes;
  }

  const iconSizeMap = {
    md: 18,
    sm: 14,
  } satisfies Record<IconButtonSizes, number>;

  const {
    ariaLabel,
    icon: Icon,
    onClick,
    size = "md",
  }: IconButtonProps = $props();
</script>

<button
  aria-label={ariaLabel}
  class={`icon-btn icon-btn-${size}`}
  onclick={onClick}
>
  <Icon size={iconSizeMap[size]} />
</button>

<style>
  button.icon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    background-color: oklch(from var(--text) l c h / 10%);
    color: var(--text);

    transition-property: all;
    transition: 200ms;

    border: 1px solid var(--border);
    border-radius: 1rem;

    cursor: pointer;
  }

  button.icon-btn:focus-visible {
    transition-property: background-color, border, border-radius;
  }

  button.icon-btn:hover {
    background-color: oklch(from var(--sky) l c h / 20%);
    border-color: var(--sky);
    color: var(--sky);
  }

  button.icon-btn.icon-btn-md {
    height: 2rem;
    width: 2rem;
  }

  button.icon-btn.icon-btn-sm {
    height: 1.75rem;
    width: 1.75rem;
  }

  button.icon-btn.icon-btn-md:hover {
    border-radius: 0.75rem;
  }

  button.icon-btn.icon-btn-sm:hover {
    border-radius: 0.65rem;
  }
</style>
