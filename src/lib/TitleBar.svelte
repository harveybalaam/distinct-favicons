<script lang="ts">
  import { FunnelIcon, PlusIcon } from "@lucide/svelte";
  import Button from "./buttons/Button.svelte";
  import IconButton from "./buttons/IconButton.svelte";
  import Search from "./Search.svelte";
</script>

<div class="title-bar">
  <div>
    <h2>Rules</h2>
    <div class="title-bar-actions">
      <Button icon={PlusIcon} text="New" />
      <IconButton ariaLabel="Filter Rules" icon={FunnelIcon} size="sm" />
    </div>
  </div>
  <Search />
</div>

<style>
  .title-bar {
    display: flex;
    flex-direction: column;

    gap: 0.75rem;

    margin-bottom: 0.75rem;
  }

  div:has(> .title-bar-actions) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title-bar-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  h2 {
    color: var(--subtext-1);

    margin: 0;

    font-size: 1.375rem;
    font-weight: 500;
  }
</style>
