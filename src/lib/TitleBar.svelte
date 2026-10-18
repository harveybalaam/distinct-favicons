<script lang="ts">
  import type { PropsWithChildren } from "../types/props-with-children";

  interface TitleBarProps extends PropsWithChildren {
    title: string;
  }

  const { children, title }: TitleBarProps = $props();
</script>

<div class="title-bar">
  <h2>{title}</h2>
  {#if children}
    <div class="title-bar-actions">
      {@render children()}
    </div>
  {/if}
</div>

<style>
  .title-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    min-height: 1.75rem;
  }

  .title-bar > h2 {
    color: var(--subtext-1);

    margin: 0;

    font-size: 1.375rem;
    font-weight: 500;
  }

  .title-bar-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
</style>
