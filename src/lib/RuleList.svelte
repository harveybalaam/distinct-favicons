<script lang="ts">
  import { FunnelIcon, PlusIcon } from "@lucide/svelte";
  import Button from "./buttons/Button.svelte";
  import IconButton from "./buttons/IconButton.svelte";
  import Search from "./Search.svelte";
</script>

<div class="rules-list">
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
  <ul>
    <li></li>
  </ul>
</div>

<style>
  .rules-list {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1rem;
    min-height: 0;
  }

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

  ul {
    display: flex;
    flex-direction: column;
    flex: 1;

    min-height: 0;

    overflow: scroll;
    scrollbar-width: none;

    padding: 0.25rem;
    margin: 0;

    border-radius: 1.25rem;
    border: 1px solid var(--border);

    list-style: none;
  }

  li {
    position: relative;
  }

  ul > li:not(:last-child)::after {
    content: "";
    position: absolute;
    left: 0.75rem;
    right: 0.75rem;
    bottom: -0rem;
    height: 1px;
    background: var(--border);
  }
</style>
