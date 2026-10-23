<script lang="ts">
  import IconButton from "./buttons/IconButton.svelte";
  import { MoveLeftIcon } from "@lucide/svelte";
  import type { PropsWithChildren } from "../types/props-with-children";
  import { nav } from "../utils/nav.svelte";

  interface TitleBarProps extends PropsWithChildren {
    title: string;
    useBackButton?: boolean;
  }

  const { children, title, useBackButton = false }: TitleBarProps = $props();
</script>

<div class="title-bar">
  <div class="title">
    {#if useBackButton}
      <IconButton
        ariaLabel="Go Back"
        icon={MoveLeftIcon}
        onClick={() => nav.back()}
        variant="ghost"
      />
    {/if}
    <h2>{title}</h2>
  </div>
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

  .title {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .title > h2 {
    color: var(--text);

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
